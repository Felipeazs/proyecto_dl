import React, { ChangeEvent } from 'react'

import styles from './Input2.module.css'

interface Input2Props {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input2 = ({ name, onChange }: Input2Props) => {
    return (
        <input name={name} onChange={onChange} className={styles.input2} />
    )
}

export default Input2
