import React, { useState } from 'react'

import DatosPersonales from '../components/DatosPersonales'
import Resultados from '../components/Resultados'

import styles from './Cuenta.module.css'

const Cuenta = () => {
    const [panel, setPanel] = useState('datos_personales')

    const clickHandler = (tab: string) => {
        setPanel(tab)
    }

    let paneles
    switch (panel) {
        case 'datos_personales':
            paneles = <DatosPersonales />
            break
        case 'resultados':
            paneles = <Resultados />
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
                    <li>
                        <a type='button'
                            onClick={() => {
                                clickHandler('resultados')
                            }}
                        >Resultados diagnósticos</a>
                    </li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div className='divisor_vertical'></div>
            <div className={styles.panel_principal}>{paneles}</div>
        </div>
    )
}

export default Cuenta
