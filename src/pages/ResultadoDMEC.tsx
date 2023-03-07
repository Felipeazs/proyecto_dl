import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import GlobalContext from '../context/user-context'
import useHttp from '../hooks/httpClient-hook'

const ResultadoDMEC = () => {
    const { id } = useParams()
    const { getDiagnostico } = useHttp()
    const { userId, token } = useContext(GlobalContext)
    const [diagnostico, setDiagnostico] = useState({ puntajeTotal: 0, porcentajeTotal: 0, nivelMadurez: 0, respuestas: {} })

    useEffect(() => {
        const fetching = async () => {
            const { diagnostico } = await getDiagnostico(userId, token, id)
            setDiagnostico(diagnostico)

            console.log(diagnostico)
        }
        fetching()
    }, [id])

    const { puntajeTotal, porcentajeTotal, nivelMadurez, respuestas } = diagnostico

    return (
        <div className='container'>ResultadoDMEC
            <p>Puntaje total: {puntajeTotal}</p>
            <p>Porcentaje total: {porcentajeTotal}</p>
            <p>Nivel de madurez: {nivelMadurez ? nivelMadurez : 'nn'}</p>
            <p>{respuestas[1]}</p>
        </div>
    )
}

export default ResultadoDMEC
