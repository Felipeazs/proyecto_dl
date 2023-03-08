import React from 'react'
import { Dna } from 'react-loader-spinner'

import Button from './ui/Button'

interface UserDataProps {
    nombre: string
    apellidos: string
    email: string
}

const DatosPersonales = ({ userData }: { userData: UserDataProps }) => {
    const { nombre, apellidos, email } = userData

    const clickHandler = () => {
        console.log('editar usuario')
    }

    if (!email) {
        return (
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />)
    }

    return (
        <div>
            {userData && (
                <>
                    <h2>Datos Personales</h2>
                    <ul>
                        <li>nombre: {nombre}</li>
                        <li>apellidos: {apellidos}</li>
                        <li>email: {email}</li>
                        <li>telefono:</li>
                    </ul>
                </>
            )}

            <Button title='Editar' type='button' clickHandler={clickHandler} />
        </div>
    )
}

export default DatosPersonales
