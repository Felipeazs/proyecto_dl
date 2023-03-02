import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import Login from './pages/Login'
import Cuenta from './pages/Cuenta'
import Resultados from './pages/Resultados'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'

import './App.css'

function App() {
    return (
        <Suspense>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/diagnostico' element={<Diagnostico />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/cuenta/:id' element={<Cuenta />} />
                        <Route path='/resultados/:id' element={<Resultados />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </Suspense>
    )
}

export default App
