import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ResultadoDMEC.module.css'

import { Dna } from 'react-loader-spinner'

import GlobalContext from '../context/user-context'
import useHttp from '../hooks/httpClient-hook'
import Chart from '../components/Chart'

const ResultadoDMEC = () => {
    const { id } = useParams()
    const { getDiagnostico } = useHttp()
    const { userId, token } = useContext(GlobalContext)
    const [diagnostico, setDiagnostico] = useState({ puntajeTotal: 0, porcentajeTotal: 0, nivelMadurez: 0, respuestas: {} })

    const { puntajeTotal, porcentajeTotal, nivelMadurez, respuestas } = diagnostico

    useEffect(() => {
        const fetching = async () => {
            const { diagnostico } = await getDiagnostico(userId, token, id)
            setDiagnostico(diagnostico)

            console.log(diagnostico)
        }
        fetching()
    }, [id])

    if (nivelMadurez === 0) {
        return (
            <div className='container'>
                <Dna visible={true} height='80' width='80' ariaLabel='dna-loading' wrapperStyle={{}} wrapperClass='dna-wrapper' />
            </div>
        )
    }

    return (
        <div className='container'>
            <div className={styles.caracteristicas}>
                <p>Nombre del proyecto: {respuestas[1]}</p>
                <p>Objetivo: {respuestas[2]}</p>
                <p>Rubro(s): {respuestas[3]}</p>
                <p>Región de impacto: {respuestas[4]}</p>
                <p>Principios EC del proyecto: {respuestas[5].join(', ')}</p>
                <p>Ámbitos EC del proyecto: {respuestas[6].join(', ')}</p>
            </div>
            <Chart puntajeTotal={puntajeTotal} porcentajeTotal={porcentajeTotal} />
            <h1>NIVEL DE MADUREZ: {nivelMadurez ? nivelMadurez : 'nn'}</h1>
        </div>
    )
}

export default ResultadoDMEC
