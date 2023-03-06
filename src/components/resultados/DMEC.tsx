import React from 'react'
import { Link } from 'react-router-dom'

import styles from './DMEC.module.css'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

interface DataTypes {
    _id: string
    puntajeTotal: number
    porcentajeTotal: number
    createdAt: Date
}

const DMEC = (data) => {

    console.log(data)

    return (
        <div className={styles.dmec}>
            <Tooltip id="nm" />
            <Tooltip id="pa" />
            <h3>Diagnóstico de madurez en economía circular</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>puntaje</th>
                        <th data-tooltip-id="pa" data-tooltip-content="Porcentaje de avance" data-tooltil-place="top">% (*)</th>
                        <th data-tooltip-id="nm" data-tooltip-content="Nivel de madurez" data-tooltil-place="top">NM (*)</th>
                        <th>fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td><Link to="/resultados/:id">{d._id}</Link></td>
                            <td>{d.puntajeTotal}</td>
                            <td>{`${d.porcentajeTotal}%`}</td>
                            <td>8</td>
                            <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DMEC
