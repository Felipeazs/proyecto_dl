import React from 'react'
import { Link } from 'react-router-dom'

import styles from './DMEC.module.css'

const DMEC = () => {
    return (
        <div className={styles.dmec}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nombre</th>
                        <th>puntaje</th>
                        <th>%</th>
                        <th>fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><Link to="/resultados/:id">análisis de madurez en economía circular</Link></td>
                        <td>56</td>
                        <td>82</td>
                        <td>22/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DMEC
