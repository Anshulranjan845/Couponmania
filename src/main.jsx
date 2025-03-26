
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/Auth/store.js'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<div className='bg-gray-100 relative bg-gradient-to-b from-black to-gray-200'>
  <App />
  </div>
</Provider>
)
