import React, { ChangeEvent } from 'react'

import styles from './Input.module.css'

interface InputProps {
    type: string
    label?: string
    name?: string
    value?: string
    placeholder: string
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

const Input = ({ type, label, name, value, placeholder, className, onInputChange }: InputProps) => {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onInputChange}
                className={className}
            />
        </div>
    )
}

export default Input
