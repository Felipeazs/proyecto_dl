import React from 'react'

import Button from './ui/Button'

interface UserDataProps {
    userData: {
        nombre: string
        apellidos: string
        email: string
    }
}

const DatosPersonales = ({ userData }: UserDataProps) => {
    const { nombre, apellidos, email } = userData

    return (
        <div>
            {email && (
                <>
                    <h2>Panel Principal</h2>
                    <ul>
                        <li>nombre: {nombre}</li>
                        <li>apellidos: {apellidos}</li>
                        <li>email: {email}</li>
                        <li>telefono:</li>
                    </ul>
                </>
            )}

            <Button title='Editar' type='button' />
        </div>
    )
}

export default DatosPersonales
