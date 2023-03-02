import React from 'react'
import { useParams } from 'react-router-dom'

const Resultados = () => {
    const { id } = useParams()

    return (
        <div className="container">
            Gráficos resultados id: {id}
        </div>
    )
}

export default Resultados
