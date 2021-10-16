import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import * as Styles from './styles'
import {normalizeValue} from '../../utils/normalizeValue'

import closeIcon from '../../images/close.svg'


const CurrencyInput = ({currencyName, isActive}) => {
  const dispatch = useDispatch()

  const activeValue = useSelector(state => state.activeValue)
  const selectedCurrencies = useSelector(state => state.selectedCurrencies)

  const [value, setValue] = useState(activeValue)


  useEffect(() => {
    if (!isActive) {
      setValue((selectedCurrencies[currencyName] * activeValue).toFixed(2))
    }
  }, [activeValue])

  const deleteItemHandler = () => {
    const selectedCurrenciesCopy = {...selectedCurrencies}
    delete selectedCurrenciesCopy[currencyName]
    dispatch({type: 'SET_SELECTED_CURRENCIES', payload: selectedCurrenciesCopy})
  }

  const inputHandler = (event) => {
    setValue(event.target.value)
    dispatch({type: 'SET_ACTIVE_CURRENCY', payload: currencyName})
    if (isActive) {
      dispatch({type: 'SET_ACTIVE_VALUE', payload: normalizeValue(event.target.value)})
    }
  }

  return (
    <Styles.CurrencyInputContainer onClick={() => setValue(normalizeValue(value))}>
      <Styles.CurrencyName>{currencyName}</Styles.CurrencyName>
      <Styles.Input value={value} onChange={inputHandler} />
      <Styles.Close onClick={deleteItemHandler}><img src={closeIcon} alt="close" /></Styles.Close>
    </Styles.CurrencyInputContainer>
  )
}

export default CurrencyInput
