import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const resultadoHandler = (id: string, n: number) => {
        navigate(`/resultado/dmec/${n}/${id}`)
    }

    const dmecHandler = () => {
        navigate('/diagnostico')
    }


    return (
        <div className={styles.dmec}>
            <Tooltip id='pa' />
            <div className={styles.titulo}>
                <h3>Diagnóstico de madurez en economía circular</h3>
                <Button type='button' title='Realizar DMEC' className={styles.button} clickHandler={dmecHandler} />
            </div>
            {data.length > 0 ? (
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
                        {data.map((d, i) => (
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
        </div>
    )
}

export default DMEC
