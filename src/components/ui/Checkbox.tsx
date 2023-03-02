import React, { ChangeEvent } from 'react'

import styles from './Checkbox.module.css'

interface CheckboxPros {
    pregunta: string
    opciones: string[]
    id: string
    isChecked: boolean[]
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ pregunta, opciones, id, isChecked, onChange }: CheckboxPros) => {
    return (
        <div className={styles.checkbox}>
            <p className='pregunta'>{`${id}.- ${pregunta}`}</p>
            {opciones.map((o, i) => (
                <div className={styles.checkbox_inputs} key={i}>
                    <input type='checkbox' id={`${id}-${o}`} name={id} value={o} onChange={onChange} checked={isChecked[i]} className={styles.chkinput} />
                    <label htmlFor={`${id}-${o}`}>{o}</label>
                </div>
            ))}
        </div>
    )
}

export default Checkbox
