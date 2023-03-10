import React, { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import UsuarioContext from '../context/user-context'

import { toast } from 'react-toastify'

import useHttp from '../hooks/httpClient-hook'

import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import styles from './Login.module.css'

const Login = () => {
    const navigate = useNavigate()
    const { loginData } = useContext(UsuarioContext)
    const { loginUser, signupUser } = useHttp()
    const [credenciales, setCredenciales] = useState<{ email: string; password: string; password2: string }>({ email: '', password: '', password2: '' })

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCredenciales((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }

    const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (credenciales.email.trim().length === 0 || credenciales.password.trim().length === 0) {
            toast.error('Debe ingresar todos los datos', {
                autoClose: 2000,
            })
            return
        }

        const usuario = await loginUser(credenciales)

        if (usuario.error === '400') {
            toast.error('Ingrese los datos correctamente')
            return
        }
        if (usuario.error === '403') {
            toast.error('El usuario ha ingresado credenciales incorrectas')
            return
        }
        if (usuario.error === '404') {
            toast.error('El usuario ingresado no existe en nuestra base de datos')
            return
        }
        if (usuario.error === '500') {
            toast.error('Hemos tenido problemas con el servidos, inténtelo más tarde')
            return
        }

        const { usuarioId, token } = usuario
        loginData(usuarioId, token)

        navigate(`/usuario/${usuario.usuarioId}`)
    }

    const signupHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (credenciales.email.trim().length === 0 || credenciales.password.trim().length === 0 || credenciales.password2.trim().length === 0) {
            toast.error('Debe ingresar todos los datos', {
                autoClose: 2000,
            })
            return
        }

        const usuario = await signupUser(credenciales)

        if (usuario.error === '302') {
            toast.error('El usuario ya existe en nuestra base de datos')
            return
        }
        if (usuario.error === '400') {
            toast.error('Los campos ingresados son incorrectos')
            return
        }
        if (usuario.error === '500') {
            toast.error('Hemos tenido problemas con el servidor, por favor inténtelo más tarde')
            return
        }

        const { usuarioId, token } = usuario
        loginData(usuarioId, token)

        navigate(`/usuario/${usuario.usuarioId}`)
    }

    return (
        <div className={`${styles.login} container`}>
            <div className={styles.background}></div>
            <form onSubmit={loginHandler} className={styles.datos}>
                <h2>Ingresa a tu cuenta</h2>
                <Input type='text' name='email' label='Usuario' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <div>
                    <Input type='password' name='password' label='Contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                    <p className={styles.underlines}>mínimo 8 caracteres</p>
                </div>
                <Button type='submit' title='Ingresar' />
            </form>
            <form onSubmit={signupHandler} className={styles.datos}>
                <h2>Regístrate</h2>
                <Input type='text' label='Usuario' name='email' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <div>
                    <Input type='password' name='password' label='Contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                    <p className={styles.underlines}>mínimo 8 caracteres</p>
                </div>
                <div>
                    <Input type='password' name='password2' label='' placeholder='Repite tu contraseña' onInputChange={inputChange} />
                    <p className={styles.underlines}>mínimo 8 caracteres</p>
                </div>
                <Button type='submit' title='Registrar' />
            </form>
        </div>
    )
}

export default Login
