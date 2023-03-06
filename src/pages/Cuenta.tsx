import React, { useState, useEffect, useContext } from 'react'

import useHttp from '../hooks/httpClient-hook'

import UsuarioContext from '../context/user-context'
import DatosPersonales from '../components/DatosPersonales'
import Resultados from '../components/Resultados'

import styles from './Cuenta.module.css'

interface DataTypes {
    _id: string
    puntajeTotal: number
    porcentajeTotal: number
    createdAt: Date
}
const Cuenta = () => {
    const { getDiagnosticos } = useHttp()
    const { userId, token } = useContext(UsuarioContext)
    const [panel, setPanel] = useState('datos_personales')
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState<{ nombre: string, apellidos: string, email: string }>({ nombre: '', apellidos: '', email: '' })
    const [resultados, setResultados] = useState<{ porcentajeTotal, puntajeTotal, createdAt, _id }[]>([{ porcentajeTotal: 0, puntajeTotal: 0, createdAt: new Date(), _id: '' }])

    useEffect(() => {
        const fetching = async () => {
            const { diagnostico_encontrado } = await getDiagnosticos(userId, token)
            setResultados(diagnostico_encontrado)

            console.log(diagnostico_encontrado)
        }
        fetching()
    }, [])

    const clickHandler = (tab: string) => {
        setPanel(tab)
    }

    let paneles
    switch (panel) {
        case 'datos_personales':
            paneles = <DatosPersonales userData={userData} />
            break
        case 'resultados':
            paneles = <Resultados data={resultados} />
            break
    }

    return (
        <div className={`${styles.cuenta} container_2`}>
            <div className={styles.panel_lateral}>
                <h2>Panel Lateral</h2>
                <ul>
                    <li>
                        <a
                            type='button'
                            onClick={() => {
                                clickHandler('datos_personales')
                            }}
                        >
                            Datos personales
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a
                            type='button'
                            onClick={() => {
                                clickHandler('resultados')
                            }}
                        >
                            Diagnósticos
                        </a>
                    </li>
                    <hr />
                </ul>
            </div>
            <div className='divisor_vertical'></div>
            <div className={styles.panel_principal}>{paneles}</div>
        </div>
    )
}

export default Cuenta
