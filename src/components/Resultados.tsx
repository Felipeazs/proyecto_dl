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
        case 'analisis2':
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
                    <li onClick={() => clickHandler('dmec')}>DMEC</li>
                    <li onClick={() => clickHandler('analisis2')}>ANALISIS 2</li>
                    <li onClick={() => clickHandler('analisis3')}>ANALISIS 3</li>
                </ul>
            </div>
            <div className={styles.contenido}>
                {contenido}
            </div>
        </div>

    )
}

export default Resultados
