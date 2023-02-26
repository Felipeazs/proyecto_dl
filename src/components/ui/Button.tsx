import React from 'react'

import styles from './Button.module.css'

interface ButtonProps {
    title: string
    type: 'button' | 'submit' | 'reset'
    name?: string
    value?: string
    clickHandler?: () => void
    disabled?: boolean
    className?: string
}

const Button = ({ title, type, name, value, clickHandler, disabled, className }: ButtonProps) => {
    return (
        <div className={styles.button}>
            <button
                type={type}
                name={name}
                value={value}
                onClick={clickHandler}
                disabled={disabled}
                className={className}>
                {title}
            </button>
        </div>
    )
}

export default Button
