import React, { ChangeEvent } from 'react'

import Input2 from './Input2'

import styles from './Radio.module.css'

interface RadioProps {
    pregunta: string
    opciones: string[]
    id: string
    isChecked?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Radio = ({ pregunta, isChecked, opciones, id, onChange }: RadioProps) => {
    return (
        <div className={styles.radio}>
            <p className='pregunta'>{`${id}.- ${pregunta}`}</p>
            {opciones.map((o, i) => (
                <div className={styles.radio_inputs} key={i}>
                    <input type='radio' id={`${id}${o}`} name={id} value={o} onChange={onChange} className={styles.radios} checked={isChecked === o ? true : false} />
                    <label htmlFor={`${id}${o}`}>
                        {o}
                        {o === 'Otro' && <Input2 name={id} onChange={onChange} />}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Radio
