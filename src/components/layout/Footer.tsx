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
        <>
            <hr />
            <footer className={`${styles.footer} container2`} id='contacto'>
                <form onSubmit={submitHandler} className={styles.formulario}>
                    <Input label='Suscríbete a nuestro newsletter' type='text' value={email} onInputChange={inputChange} placeholder='Ingresa tu correo' />
                    <Button title='Enviar' type='submit' disabled={disabled} />
                </form>
                <div className={styles.rrss}>
                    <div>
                        <a>Norma BS 8001:2017</a>
                        <a>Blog</a>
                    </div>
                    <div>
                        <a>Facebook</a>
                        <a>Instagram</a>
                        <a>LinkedIn</a>
                    </div>
                    <div>
                        <a>Términos y condiciones</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
