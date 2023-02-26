import React from 'react'

import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import styles from './Login.module.css'

const Login = () => {
    const inputChange = () => { }

    return (
        <div className={`${styles.login} container`}>
            <div className={styles.datos}>
                <p>Ingresa a tu cuenta</p>
                <Input type='text' label='usuario' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <Input type='password' label='contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                <Button type="button" title="Ingresar" />
            </div>
            <div className={styles.datos}>
                <p>Regístrate</p>
                <Input type='text' label='usuario' placeholder='Ingresa tu email' onInputChange={inputChange} />
                <Input type='password' label='contraseña' placeholder='Ingresa tu contraseña' onInputChange={inputChange} />
                <Input type='password' label='' placeholder='Repite tu contraseña' onInputChange={inputChange} />
                <Button type="button" title="Registrar" />
            </div>
        </div>
    )
}

export default Login
