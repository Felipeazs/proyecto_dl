import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Modal from 'react-modal'
import { UsuarioProvider } from './context/user-context'

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UsuarioProvider>
            <App />
        </UsuarioProvider>
    </React.StrictMode>,
)
