import React, { useState } from 'react'

import DMEC from './resultados/DMEC'
import Analisis2 from './resultados/Analisis2'
import Analisis3 from './resultados/Analisis3'

import styles from './Resultados.module.css'


interface DataTypes {
    puntajeTotal: number
    porcentajeTotal: number
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
    _id: string
}

const Resultados = ({ data }: { data: DataTypes[] }) => {
    const [tabs, setTabs] = useState('dmec')

    const clickHandler = (tab: string) => {
        setTabs(tab)
    }

    let contenido
    switch (tabs) {
        case 'dmec':
            contenido = <DMEC data={data} />
            break
        case 'seguimiento':
            contenido = <Analisis2 />
            break
        case 'analisis3':
            contenido = <Analisis3 />
            break
    }

    return (
        <div>
            <h2>Diagnósticos</h2>
            <div>
                <ul className={styles.tabs}>
                    <li className={tabs === 'dmec' ? styles.active : ''} onClick={() => clickHandler('dmec')}>DMEC</li>
                    <li className={tabs === 'seguimiento' ? styles.active : ''} onClick={() => clickHandler('seguimiento')}>SEGUIMIENTO</li>
                    <li className={tabs === 'analisis3' ? styles.active : ''} onClick={() => clickHandler('analisis3')}>ANALISIS 3</li>
                </ul>
            </div>
            <div className={styles.contenido}>
                {contenido}
            </div>
        </div>

    )
}

export default Resultados
