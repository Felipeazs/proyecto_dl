import React, { Suspense, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UsuarioContext from './context/user-context'

import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import Login from './pages/Login'
import Cuenta from './pages/Cuenta'
import Resultados from './pages/Resultados'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'

import './App.css'

function App() {
    const { isLoggedIn } = useContext(UsuarioContext)

    return (
        <Suspense>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/diagnostico' element={<Diagnostico />} />
                        {isLoggedIn &&
                            <>
                                <Route path='/usuario/:id' element={<Cuenta />} />
                                <Route path='/usuario/:id/resultados' element={<Resultados />} />
                            </>
                        }
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </Suspense>
    )
}

export default App
