import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {store} from './store'
import CurrencyWidget from './CurrencyWidget'
import Loader from './components/Loader'


const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <CurrencyWidget />
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </Provider>
  )
}

export default App
