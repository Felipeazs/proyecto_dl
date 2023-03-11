import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../ui/Button'

import styles from './DMEC.module.css'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

interface DataTypes {
    puntajeTotal: number
    porcentajeTotal: number
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
    _id: string
}
const DMEC = ({ data }: { data: DataTypes[] }) => {
    const navigate = useNavigate()
    const [selection, setSelection] = useState<DataTypes[]>([])

    const resultadoHandler = (id: string, n: number) => {
        navigate(`/resultado/dmec/${n}/${id}`)
    }

    const dmecHandler = () => {
        navigate('/diagnostico')
    }

    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const proyecto = data.filter((d) => d.respuestas[1] === event.target.value)
        setSelection(proyecto)
    }

    return (
        <div className={styles.dmec}>
            <Tooltip id='pa' />
            <h3>Diagnóstico de madurez en economía circular</h3>
            <div className={styles.seleccion}>
                <select name='proyectos' id='proyectos' onChange={selectHandler}>
                    <option>Selecciona un proyecto</option>
                    {data
                        .map((d) => d.respuestas[1])
                        .filter((item, index, arr) => arr.indexOf(item) === index)
                        .map((f, i) => (
                            <option value={f} key={i}>
                                {f}
                            </option>
                        ))}
                </select>
            </div>
            {selection.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>proyecto</th>
                            <th data-tooltip-id='pa' data-tooltip-content='max: 36' data-tooltil-place='top'>
                                puntaje
                            </th>
                            <th data-tooltip-id='pa' data-tooltip-content='Porcentaje de avance' data-tooltil-place='top'>
                                %
                            </th>
                            <th data-tooltip-id='pa' data-tooltip-content='Niveles de madurez (1 a 8)' data-tooltil-place='top'>
                                NM
                            </th>
                            <th>fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selection.map((d, i) => (
                            <tr key={i} onClick={() => resultadoHandler(d._id, i + 1)}>
                                <td>{i + 1}</td>
                                <td>{d._id}</td>
                                <td>
                                    <span>{d.respuestas[1]}</span>
                                </td>
                                <td>{d.puntajeTotal}</td>
                                <td>{`${d.porcentajeTotal}%`}</td>
                                <td>{d.nivelMadurez ? d.nivelMadurez : 'nn'}</td>
                                <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>📃 Ningún proyecto ha sido seleccionado</p>
            )}
            <Button type='button' title='Realizar DMEC' className={styles.button} clickHandler={dmecHandler} />
        </div>
    )
}

export default DMEC
