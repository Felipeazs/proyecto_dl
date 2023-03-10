import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './ResultadoDMEC.module.css'

import { toast } from 'react-toastify'
import { Dna } from 'react-loader-spinner'

import GlobalContext from '../context/user-context'
import useHttp from '../hooks/httpClient-hook'

import Chart from '../components/Chart'
import Chart2 from '../components/Chart2'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Button3 from '../components/ui/Button3'

import mensajes from '../assets/resultados.json'

const ResultadoDMEC = () => {
    const navigate = useNavigate()
    const { n, id } = useParams()
    const { getDiagnostico, deleteDiagnostico } = useHttp()
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

    const volverHandler = () => {
        navigate(-1)
    }

    const eliminarHandler = async (id: string) => {
        await deleteDiagnostico(userId, token, id)
        toast.info('Diagnostico eliminado')
        volverHandler()
    }

    return (
        <div className={`${styles.resultado} container`}>
            <Button title='Volver' type='button' className={styles.button} clickHandler={volverHandler} />
            <Card>
                <div className={styles.header}>
                    <h1>DMEC #{n}</h1>
                    <Button3
                        title='Eliminar'
                        type='button'
                        clickHandler={() => {
                            eliminarHandler(id)
                        }}
                    />
                </div>
                <div className={styles.caracteristicas}>
                    <p>Nombre del proyecto: {respuestas[1]}</p>
                    <p>Objetivo: {respuestas[2]}</p>
                    <p>Rubro(s): {respuestas[3]}</p>
                    <p>Región de impacto: {respuestas[4]}</p>
                    <p>Principio(s) EC del proyecto: {respuestas[5].join(', ')}</p>
                    <p>Ámbito(s) EC del proyecto: {respuestas[6].join(', ')}</p>
                </div>
                <div className={styles.graficos}>
                    <Chart porcentajeTotal={porcentajeTotal} />
                    <Chart2 puntajeTotal={puntajeTotal} respuestas={respuestas} />
                </div>
                <h2>NIVEL DE MADUREZ: {`${nivelMadurez}/8`}</h2>
                <p>{mensajes[nivelMadurez]}</p>
            </Card>
        </div>
    )
}

export default ResultadoDMEC
