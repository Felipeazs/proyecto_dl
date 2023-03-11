import React, { useState, useEffect, useContext } from 'react'
import { Dna } from 'react-loader-spinner'

import useHttp from '../hooks/httpClient-hook'

import UsuarioContext from '../context/user-context'
import DatosPersonales from '../components/DatosPersonales'
import Resultados from '../components/Resultados'

import styles from './Cuenta.module.css'

interface DataTypes {
    _id: string
    puntajeTotal: number
    porcentajeTotal: number
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
}
const Cuenta = () => {
    const { getDiagnosticos } = useHttp()
    const { userId, token } = useContext(UsuarioContext)
    const [panel, setPanel] = useState('resultados')
    const [resultados, setResultados] = useState<DataTypes[]>([{ porcentajeTotal: 0, puntajeTotal: 0, nivelMadurez: 0, respuestas: {}, createdAt: new Date(), _id: '' }])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetching = async () => {
            const { diagnostico_encontrado } = await getDiagnosticos(userId, token)
            setResultados(diagnostico_encontrado)

            setLoading(false)
        }
        fetching()
    }, [])

    const clickHandler = (tab: string) => {
        setPanel(tab)
    }

    let loadingIcon = <Dna visible={true} height='80' width='80' ariaLabel='dna-loading' wrapperStyle={{}} wrapperClass='dna-wrapper' />

    let paneles
    switch (panel) {
        case 'datos_personales':
            paneles = <DatosPersonales />
            break
        case 'resultados':
            paneles = <Resultados data={resultados} />
            break
    }

    return (
        <div className={`${styles.cuenta} container_2`}>
            <div className={styles.panel_lateral}>
                <ul>
                    <li
                        onClick={() => {
                            clickHandler('datos_personales')
                        }}
                    >
                        <span>Datos personales</span>
                    </li>
                    <hr />
                    <li
                        onClick={() => {
                            clickHandler('resultados')
                        }}
                    >
                        <span>Diagnósticos</span>
                    </li>
                    <hr />
                </ul>
            </div>
            <div className='divisor_vertical'></div>
            {loading ? loadingIcon : <div className={styles.panel_principal}>{paneles}</div>}
        </div>
    )
}

export default Cuenta
