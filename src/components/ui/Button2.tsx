import React from 'react'

import styles from './Button2.module.css'

interface ButtonProps {
    title: string
}

const Button2 = ({ title }: ButtonProps) => {
    return (
        <button className={styles.button2}>{title}</button>
    )
}

export default Button2
