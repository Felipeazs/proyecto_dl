import React, { ChangeEvent } from 'react'

import styles from './Input3.module.css'

interface Input3Props {
    pregunta: string
    opciones: string[]
    id: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input3 = ({ pregunta, id, onChange }: Input3Props) => {
    return (
        <div className={styles.input3}>
            <label htmlFor="">{`${id}.- ${pregunta}`}</label>
            <input type="text" name={id} onChange={onChange} />
        </div>
    )
}

export default Input3
