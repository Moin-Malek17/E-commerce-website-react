import { createRoot } from 'react-dom/client'
import { ToastContainer ,Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './context/dataContex.jsx'
import { CartContextProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
<DataProvider>
    <CartContextProvider>
        <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
        <App />
    </CartContextProvider>
</DataProvider>
)
