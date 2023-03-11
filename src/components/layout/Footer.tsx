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
                        <a href='https://knowledge.bsigroup.com/products/framework-for-implementing-the-principles-of-the-circular-economy-in-organizations-guide/standard' target='_blank'>Framework BS 8001:2017</a>
                        <a>Blog</a>
                        <a href='https://www.bsigroup.com/en-GB/standards/benefits-of-using-standards/becoming-more-sustainable-with-standards/BS8001-Circular-Economy/' target='_blank'>Recursos Externos</a>
                    </div>
                    <div>
                        <a>Facebook</a>
                        <a>Instagram</a>
                        <a>LinkedIn</a>
                    </div>
                    <div>
                        <a>Términos y condiciones</a>
                        <a>Políticas de privacidad</a>
                        <a>Políticas de cookies</a>
                        <a>Preguntas frecuentes</a>
                        <a>Contáctanos</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
