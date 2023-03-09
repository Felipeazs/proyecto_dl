import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import styles from './Chart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.maintainAspectRatio = true
ChartJS.defaults.plugins.legend.display = false

const Chart = ({ puntajeTotal, porcentajeTotal }: { puntajeTotal: number; porcentajeTotal: number }) => {
    // const dataPuntaje = {
    //     labels: ['puntaje', 'total'],
    //     datasets: [
    //         {
    //             label: 'Puntaje total',
    //             data: [puntajeTotal, 36 - puntajeTotal],
    //             backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
    //             borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
    //             borderWidth: 1,
    //         },
    //     ],
    // }
    const dataPorcentaje = {
        labels: ['', ''],
        datasets: [
            {
                label: 'Porcentaje total',
                data: [porcentajeTotal, 100 - porcentajeTotal],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderWidth: 1,
            },
        ],
    }
    return (
        <div className={styles.grafico}>
            <Doughnut data={dataPorcentaje} />
            <div className={styles.contenido}>
                <h1>{porcentajeTotal}</h1>
                <p>% Total</p>
            </div>
        </div>
    )
}

export default Chart
