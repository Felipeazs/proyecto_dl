
import styles from './Button3.module.css'

interface ButtonProps {
    title: string
    type: 'button' | 'submit' | 'reset'
    name?: string
    value?: string
    clickHandler?: () => void
    disabled?: boolean
    className?: string
}
const Button3 = ({ title, type, name, value, clickHandler, disabled, className }: ButtonProps) => {
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


export default Button3
