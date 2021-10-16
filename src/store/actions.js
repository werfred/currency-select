export const fetchCurrencies = () => {
  return async (dispatch) => {
    dispatch({type: 'SET_LOADING', payload: true})
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (response.status !== 200) {
      window.location.reload()
    } else {
      const data = await response.json()
      if (data.base) {
        dispatch({type: 'SET_CURRENCIES_DATA', payload: data})
        dispatch({type: 'SET_CURRENCIES_NAMES', payload: Object.keys(data.rates)})
        dispatch({type: 'SET_LOADING', payload: false})
      } else {
        window.location.reload()
      }
    }
  }
}
