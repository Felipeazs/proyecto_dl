import React, { useState } from 'react'

import DMEC from './resultados/DMEC'

import styles from './Resultados.module.css'

const Resultados = () => {
    const [tabs, setTabs] = useState('dmec')

    const clickHandler = (tab: string) => {
        setTabs(tab)
    }

    let contenido
    switch (tabs) {
        case 'dmec':
            contenido = <DMEC />
            break
    }

    return (
        <div>
            <h2>Resultados</h2>
            <div>
                <ul className={styles.tabs}>
                    <li onClick={() => clickHandler('dmec')}>DMEC</li>
                    <li>DMEC</li>
                    <li>DMEC</li>
                </ul>
            </div>
            <div className={styles.contenido}>
                {contenido}
            </div>
        </div>

    )
}

export default Resultados
