import { FormEvent, useState } from 'react'

import Input from '../ui/Input'
import Button from '../ui/Button'

import styles from './Footer.module.css'

const Footer = () => {

    const [disabled, setDisabled] = useState<boolean>(true)
    const [email, setEmail] = useState<string>('')

    const inputChange = (event: FormEvent<HTMLInputElement>) => {
        setDisabled(false)
        setEmail(event.currentTarget.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(email)

        setEmail('')
    }
    return (
        <footer className={styles.footer} id='contacto'>
            <div className='formulario'>
                <form onSubmit={submitHandler}>
                    <Input
                        label='Suscríbete a nuestro newsletter'
                        type='text'
                        value={email}
                        onInputChange={inputChange}
                        placeholder='Ingresa tu correo'
                    />
                    <Button
                        title='Enviar'
                        type='submit'
                        disabled={disabled}
                    />
                </form>
            </div>
        </footer>
    )
}

export default Footer
