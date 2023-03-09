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
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
}
const Cuenta = () => {
    const { getDiagnosticos, getUser } = useHttp()
    const { userId, token } = useContext(UsuarioContext)
    const [panel, setPanel] = useState('datos_personales')
    const [resultados, setResultados] = useState<DataTypes[]>([{ porcentajeTotal: 0, puntajeTotal: 0, nivelMadurez: 0, respuestas: {}, createdAt: new Date(), _id: '' }])
    const [usuarioData, setUsuarioData] = useState({ nombre: '', apellidos: '', email: '' })

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetching = async () => {
            const { diagnostico_encontrado } = await getDiagnosticos(userId, token)
            setResultados(diagnostico_encontrado)

            const { nombre, apellidos, email } = await getUser(userId, token)
            setUsuarioData({ nombre, apellidos, email })
        }
        fetching()
    }, [])

    const clickHandler = (tab: string) => {
        setPanel(tab)
    }

    let paneles
    switch (panel) {
        case 'datos_personales':
            paneles = <DatosPersonales userData={usuarioData} />
            break
        case 'resultados':
            paneles = <Resultados data={resultados} />
            break
    }

    return (
        <div className={`${styles.cuenta} container_2`}>
            <div className={styles.panel_lateral}>
                <ul>
                    <li onClick={() => { clickHandler('datos_personales') }}>
                        <span>
                            Datos personales
                        </span>
                    </li>
                    <hr />
                    <li onClick={() => { clickHandler('resultados') }}>
                        <span>
                            Diagnósticos
                        </span>
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
