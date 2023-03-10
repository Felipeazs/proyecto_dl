import React from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'

import styles from './Chart.module.css'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
ChartJS.defaults.maintainAspectRatio = true
ChartJS.defaults.plugins.legend.display = false

const Chart2 = ({ puntajeTotal, respuestas }: { puntajeTotal: number, respuestas: {} }) => {
    const item1 = respuestas[7] ? respuestas[7].length / 3 : 0
    const item2 = respuestas[8] ? respuestas[8].length / 3 : 0
    const item3 = respuestas[9] ? respuestas[9].length / 3 : 0
    const item4 = respuestas[10] ? respuestas[10].length / 2 : 0
    const item5 = respuestas[11] ? respuestas[11].length / 4 : 0
    const item6 = respuestas[12] ? respuestas[12].length / 9 : 0
    const item7 = respuestas[13] ? respuestas[13].length / 3 : 0
    const item8 = respuestas[14] ? respuestas[14].length / 2 : 0
    const item9 = respuestas[15] ? respuestas[15].length / 6 : 0
    const item10 = respuestas[16] ? respuestas[16].length / 1 : 0
    const item11 = respuestas[17] ? respuestas[17].length / 1 : 0

    const data = {
        labels: ['MT', 'B', 'GI', 'F', 'CN', 'P-P', 'I', 'MRR'],
        datasets: [
            {
                label: '# of Votes',
                data: [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
                borderWidth: 1,
            },
        ],
    }
    return (
        <div className={styles.grafico}>
            <Radar data={data} />
        </div>
    )
}

export default Chart2
