import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notiReducer from './reducers/notiReducer'

const store = configureStore({
  reducer: {
    'notification': notiReducer,
    'filter': filterReducer,
    'anecdotes': anecdoteReducer
  }
})
console.log(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)