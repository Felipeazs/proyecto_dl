import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react'

import Button from './ui/Button'

import styles from './DatosPersonales.module.css'

interface UserDataProps {
    nombre: string
    apellidos: string
    email: string
    telefono: string
}

const DatosPersonales = ({ userData }: { userData: UserDataProps }) => {
    const formRef = useRef<HTMLFormElement>(null)
    const [usuario, setUsuario] = useState({ nombre: '', apellidos: '', email: '', telefono: '' })
    const [title, setTitle] = useState<string>('Editar')

    useEffect(() => {
        if (userData.email) {
            setUsuario({
                nombre: userData.nombre,
                apellidos: userData.apellidos,
                email: userData.email,
                telefono: userData.telefono,
            })
        }
    }, [])

    const { nombre, apellidos, email, telefono } = usuario

    const clickHandler = () => {
        console.log('editar usuario')
        //TODO: Guardar nuevos datos del usuario en bd

        if (title === 'Editar') {
            setTitle('Guardar')
        } else {
            setTitle('Editar')
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        }
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuario((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(usuario)
    }

    let datos_personales
    if (title === 'Guardar') {
        datos_personales = (
            <form onSubmit={submitHandler} ref={formRef}>
                <ul>
                    <li>
                        nombre: <input type='text' placeholder='ingresa tu nombre' onChange={onInputChange} name='nombre' value={nombre} />
                    </li>
                    <li>
                        apellidos: <input type='text' placeholder='ingresa tus apellidos' onChange={onInputChange} name='apellidos' value={apellidos} />
                    </li>
                    <li>
                        email: <input type='text' placeholder='ingresa tu email' onChange={onInputChange} name='email' value={email} />
                    </li>
                    <li>
                        teléfono: <input type='text' placeholder='ingresa tu teléfono' onChange={onInputChange} name='telefono' value={telefono} />
                    </li>
                </ul>
            </form>
        )
    } else {
        datos_personales = (
            <ul>
                <li>nombre: {nombre}</li>
                <li>apellidos: {apellidos}</li>
                <li>email: {email}</li>
                <li>teléfono: {telefono}</li>
            </ul>
        )
    }

    return (
        <div className={styles.datos}>
            {userData && (
                <>
                    <h2>Datos Personales</h2>
                    {datos_personales}
                </>
            )}

            <Button title={title} type={title === 'Editar' ? 'button' : 'submit'} clickHandler={clickHandler} />
        </div>
    )
}

export default DatosPersonales
