import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'

import * as Styles from './styles'
import CurrencyInput from '../components/CurrencyInput'
import Dropdown from '../components/Dropdown'
import {fetchCurrencies} from '../store/actions'
import {timeConverter} from '../utils/unixConverter'


const CurrencyWidget = () => {
  const dispatch = useDispatch()

  const currenciesData = useSelector(state => state.currenciesData)
  const currenciesNames = useSelector(state => state.currenciesNames)
  const activeCurrency = useSelector(state => state.activeCurrency)
  const selectedCurrencies = useSelector(state => state.selectedCurrencies)

  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState(currenciesNames)

  const selectedCurrenciesNames = Object.keys(selectedCurrencies)

  const selectCurrencyHandler = (currencyName) => {
    if (!selectedCurrenciesNames.includes(currencyName)) {
      if (selectedCurrenciesNames.length < 8) {
        dispatch({
          type: 'ADD_SELECTED_CURRENCY',
          payload: {[currencyName]: currenciesData.rates[currencyName] / currenciesData.rates[activeCurrency]}
        })
      } else {
        toast.error('Only 8 currencies are allowed to be selected')
      }
    } else {
      toast.error('This currency is already selected!')
    }
  }

  useEffect(() => {
    let newRates = {}
    Object.keys(selectedCurrencies).forEach(item => {
      newRates = {...newRates, [item]: selectedCurrencies[item] / selectedCurrencies[activeCurrency]}
    })
    dispatch({
      type: 'SET_SELECTED_CURRENCIES',
      payload: newRates
    })
  }, [activeCurrency])

  useEffect(() => {
    setSearchResults(currenciesNames.filter(currency => currency.toLowerCase().includes(searchValue.toLowerCase())))
  }, [searchValue, currenciesNames])

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, [])

  return (
    <>
      <Styles.UpdatedTime>updated at {timeConverter(currenciesData.timestamp)} GMT+02:00</Styles.UpdatedTime>
      <Styles.WidgetContainer>
        <Dropdown
          title={'Select  Currencies'}
          setSearchCallback={setSearchValue}
          searchBar={<Styles.Input placeholder="Search" value={searchValue}
                                   onChange={(e) => setSearchValue(e.target.value)} />}
        >
          {searchResults && searchResults.map(currencyName => (
            <Styles.SelectCurrency
              key={`currency-${currencyName}`}
              onClick={() => selectCurrencyHandler(currencyName)}
              isSelected={selectedCurrenciesNames.includes(currencyName)}
            >
              {currencyName}
            </Styles.SelectCurrency>
          ))}
        </Dropdown>

        <Styles.SelectedCurrenciesContainer>
          {selectedCurrenciesNames.length === 0 &&
          <Styles.EmptyMessage>Select at least two currencies</Styles.EmptyMessage>}
          {selectedCurrenciesNames.map(currency => (
            <CurrencyInput
              currencyName={currency}
              isActive={currency === activeCurrency}
              key={`currencyInput-${currency}`}
            />
          ))}
        </Styles.SelectedCurrenciesContainer>
      </Styles.WidgetContainer>
    </>

  )
}

export default CurrencyWidget
