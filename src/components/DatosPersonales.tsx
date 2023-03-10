import React, { useState, useRef, useEffect, useContext, ChangeEvent, FormEvent } from 'react'

import { toast } from 'react-toastify'
import { Dna } from 'react-loader-spinner'

import useHttp from '../hooks/httpClient-hook'
import GlobalContext from '../context/user-context'

import Button from './ui/Button'
import Button3 from './ui/Button3'

import styles from './DatosPersonales.module.css'

interface UserDataProps {
    nombre: string
    apellidos: string
    email: string
    telefono: string
}

const DatosPersonales = () => {
    const { userId, token } = useContext(GlobalContext)
    const { updateUser, getUser } = useHttp()
    const formRef = useRef<HTMLFormElement>(null)
    const [usuario, setUsuario] = useState({ nombre: '', apellidos: '', email: '', telefono: '' })
    const [title, setTitle] = useState<string>('Editar')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetching = async () => {
            console.log(userId)
            const resultado = await getUser(userId, token)
            console.log(resultado)
            setUsuario({ nombre: resultado.nombre, apellidos: resultado.apellidos, email: resultado.email, telefono: resultado.telefono })

            setLoading(false)
        }
        fetching()
    }, [])


    const { nombre, apellidos, email, telefono } = usuario
    console.log(email)

    if (loading) {
        return (
            <div className='container'>
                <Dna visible={true} height='80' width='80' ariaLabel='dna-loading' wrapperStyle={{}} wrapperClass='dna-wrapper' />
            </div>
        )
    }

    const clickHandler = () => {

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

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setLoading(true)
        const resultado = await updateUser(usuario, userId, token)
        const usuario_updated = {
            nombre: resultado.usuario.nombre,
            apellidos: resultado.usuario.apellidos,
            email: resultado.usuario.email,
            telefono: resultado.usuario.telefono,
        }

        setUsuario(usuario_updated)
        setLoading(false)

        toast.success('Datos personales actualizados')
    }

    const cancelarHandler = () => {
        setTitle('Editar')
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
            {usuario && (
                <>
                    <h2>Datos Personales</h2>
                    {datos_personales}
                </>
            )}
            <div className={styles.buttons}>
                <Button title={title} type={title === 'Editar' ? 'button' : 'submit'} clickHandler={clickHandler} />
                {title === 'Guardar' && <Button3 title='Cancelar' type='button' clickHandler={cancelarHandler} />}
            </div>
        </div>
    )
}

export default DatosPersonales
