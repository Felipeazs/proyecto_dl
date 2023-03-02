import React from 'react'

import Button from './ui/Button'


const DatosPersonales = () => {
    return (
        <div>
            <h2>Panel Principal</h2>
            <ul>
                <li>nombre:</li>
                <li>apellidos:</li>
                <li>email:</li>
                <li>telefono:</li>
            </ul>

            <Button title="Editar" type="button" />
        </div>
    )
}

export default DatosPersonales
