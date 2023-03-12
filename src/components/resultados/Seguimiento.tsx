import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Scatter } from 'react-chartjs-2'

ChartJS.register(...registerables)

import styles from './Seguimiento.module.css'

interface DataTypes {
    _id: string
    puntajeTotal: number
    porcentajeTotal: number
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
}

const Seguimiento = ({ data }: { data: DataTypes[] }) => {
    let min: string
    let max: string
    if (data.length) {
        let datemax = new Date(data[0].createdAt)
        datemax.setDate(datemax.getDate() + 1)
        max = datemax.toLocaleDateString()

        let datemin = new Date(data[data.length - 1].createdAt)
        datemin.setDate(datemin.getDate() - 1)
        min = datemin.toLocaleDateString()
    }
    let fechas = data.map(d => new Date(d.createdAt).toLocaleDateString()).reverse().filter((item, index, arr) => arr.indexOf(item) === index)

    let labels = []
    labels = [min, ...fechas, max]

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: data.length ? `Seguimiento temporal del Nivel de Madurez del proyecto: ${data[0].respuestas[1]}` : 'Seleccione un proyecto o realice un DMEC',
                padding: 20,
                font: {
                    size: 20,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nivel de Madurez'
                },
                min: 1,
                max: 8,
                grid: {
                    display: data.length ? true : false
                }
            },
            x: {
                type: 'category',
                labels: labels,
                title: {
                    display: true,
                    text: 'Fecha'
                },
                min: min,
                max: max,
                grid: {
                    display: data.length ? true : false
                }
            },
        }
    }

    const scatterData = {
        datasets: [
            {
                label: 'Seguimiento DMEC',
                data: data.map(d => (
                    { x: new Date(d.createdAt).toLocaleDateString(), y: d.nivelMadurez }
                )),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ]
    }
    return (
        <div className={styles.scatter}>
            {/*// @ts-ignore */}
            <Scatter options={options} data={scatterData} className={styles.scatter} />
        </div>
    )
}

export default Seguimiento
