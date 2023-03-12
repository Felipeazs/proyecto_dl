import React, { useState, ChangeEvent } from 'react'

import DMEC from './resultados/DMEC'
import Seguimiento from './resultados/Seguimiento'
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
    const [selection, setSelection] = useState<DataTypes[]>([])

    const clickHandler = (tab: string) => {
        setTabs(tab)
    }

    let contenido
    switch (tabs) {
        case 'dmec':
            contenido = <DMEC data={selection} />
            break
        case 'seguimiento':
            contenido = <Seguimiento data={selection} />
            break
        case 'analisis3':
            contenido = <Analisis3 />
            break
    }

    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const proyecto = data.filter((d) => d.respuestas[1] === event.target.value)
        setSelection(proyecto)
    }

    return (
        <div className={styles.resultados}>
            <div className={styles.seleccion}>
                <h2>Diagnósticos</h2>
                <select name='proyectos' id='proyectos' onChange={selectHandler}>
                    <option>Seleccione un proyecto</option>
                    {data
                        .map((d) => d.respuestas[1])
                        .filter((item, index, arr) => arr.indexOf(item) === index)
                        .sort()
                        .map((f, i) => (
                            <option value={f} key={i}>
                                {f}
                            </option>
                        ))}
                </select>
            </div>
            <div>
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
        </div>

    )
}

export default Resultados
