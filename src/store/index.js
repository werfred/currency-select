import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const initialState = {
  isLoading: false,
  currenciesData: {},
  currenciesNames: [],
  selectedCurrencies: {},
  activeCurrency: 'EUR',
  activeValue: '1000'
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {...state, isLoading: action.payload}

    case 'SET_CURRENCIES_DATA':
      return {...state, currenciesData: action.payload}

    case 'SET_CURRENCIES_NAMES':
      return {...state, currenciesNames: action.payload}

    case 'SET_SELECTED_CURRENCIES':
      return {...state, selectedCurrencies: {...action.payload}}
    case 'ADD_SELECTED_CURRENCY':
      return {...state, selectedCurrencies: {...state.selectedCurrencies, ...action.payload}}

    case 'SET_ACTIVE_CURRENCY':
      return {...state, activeCurrency: action.payload}

    case 'SET_ACTIVE_VALUE':
      return {...state, activeValue: action.payload}

    default:
      return state
  }
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
