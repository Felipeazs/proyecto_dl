import React from 'react'
import { Link } from 'react-router-dom'

import styles from './DMEC.module.css'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const DMEC = () => {
    return (
        <div className={styles.dmec}>
            <Tooltip id="nm" />
            <Tooltip id="pa" />
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nombre</th>
                        <th>puntaje</th>
                        <th data-tooltip-id="pa" data-tooltip-content="Porcentaje de avance" data-tooltil-place="top">%</th>
                        <th data-tooltip-id="nm" data-tooltip-content="Nivel de madurez" data-tooltil-place="top">NM (*)</th>
                        <th>fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to="/resultados/:id">análisis de madurez en economía circular</Link></td>
                        <td>56</td>
                        <td>82</td>
                        <td>8</td>
                        <td>22/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DMEC
