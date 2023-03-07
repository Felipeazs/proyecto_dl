import React from 'react'

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

    return (
        <div>
            {email && (
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
