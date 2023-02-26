import React, { useState, ChangeEvent, FormEvent } from 'react'

import useHttp from '../hooks/httpClient-hook'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import styles from './Login.module.css'

const Login = () => {
    const { loginUser, signupUser } = useHttp()
    const [usuario, setUsuario] = useState<{ email: string, pass: string, pass2: string }>({ email: '', pass: '', pass2: '' })

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuario(prevState => {
            return {
                ...prevState, [event.target.name]: event.target.value
            }
        })
    }

    const loginHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        //TODO: Verificar datos

        if (usuario.email.trim().length === 0 || usuario.pass.trim().length === 0) {
            toast.error('Debe ingresar todos los datos', {
                autoClose: 2000
            })
            return
        }

        toast.info('verificando datos')

        loginUser(usuario)
    }

    const logonHandler = (event: FormEvent<HTMLFormElement>) => {
        //TODO: Enviar usuario a bd
        event.preventDefault()

        if (usuario.email.trim().length === 0 || usuario.pass.trim().length === 0 || usuario.pass2.trim().length === 0) {
            toast.error('Debe ingresar todos los datos', {
                autoClose: 2000
            })
            return
        }

        toast.info('verificando datos')

        signupUser(usuario)
    }

    return (
        <div className={`${styles.login} container`}>
            <ToastContainer />
            <form onSubmit={loginHandler} className={styles.datos}>
                <p>Ingresa a tu cuenta</p>
                <Input type='text' name='email' label='usuario' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <Input type='password' name='pass' label='contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                <Button type="submit" title="Ingresar" />
            </form>
            <form onSubmit={logonHandler} className={styles.datos}>
                <p>Regístrate</p>
                <Input type='text' label='usuario' name='email' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <Input type='password' name='pass' label='contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                <Input type='password' name='pass2' label='' placeholder='Repite tu contraseña' onInputChange={inputChange} />
                <Button type="submit" title="Registrar" />
            </form>
        </div>
    )
}

export default Login
