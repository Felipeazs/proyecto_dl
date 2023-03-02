import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import Input3 from '../components/ui/Input3'
import Radio from '../components/ui/Radio'
import Checkbox from '../components/ui/Checkbox'
import Button from '../components/ui/Button'
import styles from './Diagnostico.module.css'

import Confetti from 'react-confetti'

import data from '../assets/preguntas.json'
import resultados from '../assets/resultados.json'

const Diagnostico = () => {
    const [isItem, setIsItem] = useState(1)
    const [titulo, setTitulo] = useState('')
    const [prevItem, setPrevItem] = useState(0)
    const [respuestas, setRespuestas] = useState<string[]>([])
    const [puntajeTotal, setPuntajeTotal] = useState<number>(0)
    const [porcentajeTotal, setPorcentajeTotal] = useState<number>(0)
    const [primerAnalisis, setPrimerAnalisis] = useState<string>('')
    const [p5, setP5] = useState<string[]>([])
    const [isP5Checked, setIsP5Checked] = useState<boolean[]>(new Array(7).fill(false))
    const [p6, setP6] = useState<string[]>([])
    const [isP6Checked, setIsP6Checked] = useState<boolean[]>(new Array(7).fill(false))
    const [p7, setP7] = useState<string[]>([])
    const [isP7Checked, setIsP7Checked] = useState<boolean[]>(new Array(4).fill(false))
    const [p8, setP8] = useState<string[]>([])
    const [isP8Checked, setIsP8Checked] = useState<boolean[]>(new Array(4).fill(false))
    const [p9, setP9] = useState<string[]>([])
    const [isP9Checked, setIsP9Checked] = useState<boolean[]>(new Array(3).fill(false))
    const [p10, setP10] = useState<string[]>([])
    const [isP10Checked, setIsP10Checked] = useState<boolean[]>(new Array(3).fill(false))
    const [p11, setP11] = useState<string[]>([])
    const [isP11Checked, setIsP11Checked] = useState<boolean[]>(new Array(5).fill(false))
    const [p12, setP12] = useState<string[]>([])
    const [isP12Checked, setIsP12Checked] = useState<boolean[]>(new Array(10).fill(false))
    const [p13, setP13] = useState<string[]>([])
    const [isP13Checked, setIsP13Checked] = useState<boolean[]>(new Array(4).fill(false))
    const [p14, setP14] = useState<string[]>([])
    const [isP14Checked, setIsP14Checked] = useState<boolean[]>(new Array(3).fill(false))
    const [p15, setP15] = useState<string[]>([])
    const [isP15Checked, setIsP15Checked] = useState<boolean[]>(new Array(7).fill(false))
    const [p16, setP16] = useState<string[]>([])
    const [isP16Checked, setIsP16Checked] = useState<boolean[]>(new Array(2).fill(false))
    const [p17, setP17] = useState<string[]>([])
    const [isP17Checked, setIsP17Checked] = useState<boolean[]>(new Array(2).fill(false))

    const size = useWindowSize()

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })

        console.log(respuestas)
    }

    const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })

        console.log(respuestas)
    }

    const p5Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[5].opciones.indexOf(value)

        const updateCheckState = isP5Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP5Checked(updateCheckState)

        if (checked) {
            setP5([...p5, value])
        } else {
            const p = p5.filter((p) => p !== value)
            setP5([...p])
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p5,
            }
        })

        if (value === 'No lo sabemos') {
            setIsP5Checked([false, false, false, false, false, false, true])

            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p6Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[6].opciones.indexOf(value)

        const updateCheckState = isP6Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP6Checked(updateCheckState)

        if (checked) {
            setP6([...p6, value])
        } else {
            const p = p6.filter((p) => p !== value)
            setP6([...p])
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p6,
            }
        })

        if (value === 'No lo sabemos') {
            setIsP6Checked([false, false, false, false, false, false, true])

            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p7Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[7].opciones.indexOf(value)

        const updateCheckState = isP7Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP7Checked(updateCheckState)

        if (checked) {
            setP7([...p7, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p7.filter((p) => p !== value)
            setP7([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p7,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP7Checked([false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)

            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p8Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[8].opciones.indexOf(value)

        const updateCheckState = isP8Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP8Checked(updateCheckState)

        if (checked) {
            setP8([...p8, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p8.filter((p) => p !== value)
            setP8([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p8,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP8Checked([false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)

            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p9Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[9].opciones.indexOf(value)

        const updateCheckState = isP9Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP9Checked(updateCheckState)

        if (checked) {
            setP9([...p9, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p9.filter((p) => p !== value)
            setP9([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p9,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP9Checked([false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p10Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[10].opciones.indexOf(value)

        const updateCheckState = isP10Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP10Checked(updateCheckState)

        if (checked) {
            setP10([...p10, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p10.filter((p) => p !== value)
            setP10([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p10,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP10Checked([false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p11Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[11].opciones.indexOf(value)

        const updateCheckState = isP11Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP11Checked(updateCheckState)

        if (checked) {
            setP11([...p11, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p11.filter((p) => p !== value)
            setP11([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p11,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setP11([])
            setIsP11Checked([false, false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)

            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p12Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[12].opciones.indexOf(value)

        const updateCheckState = isP12Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP12Checked(updateCheckState)

        if (checked) {
            setP12([...p12, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p12.filter((p) => p !== value)
            setP12([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p12,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP12Checked([false, false, false, false, false, false, false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
            return
        }
    }

    const p13Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[13].opciones.indexOf(value)

        const updateCheckState = isP13Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP13Checked(updateCheckState)

        if (checked) {
            setP13([...p13, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p13.filter((p) => p !== value)
            setP13([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p13,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP13Checked([false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p14Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[14].opciones.indexOf(value)

        const updateCheckState = isP14Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP14Checked(updateCheckState)

        if (checked) {
            setP14([...p14, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p14.filter((p) => p !== value)
            setP14([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p14,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP14Checked([false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p15Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[15].opciones.indexOf(value)

        const updateCheckState = isP15Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP15Checked(updateCheckState)

        if (checked) {
            setP15([...p15, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p15.filter((p) => p !== value)
            setP15([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p15,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
            setIsP15Checked([false, false, false, false, false, false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p16Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[16].opciones.indexOf(value)

        const updateCheckState = isP16Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP16Checked(updateCheckState)

        if (checked) {
            setP16([...p16, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p16.filter((p) => p !== value)
            setP16([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p16,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'No') {
            setIsP16Checked([false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const p17Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[17].opciones.indexOf(value)

        const updateCheckState = isP17Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP17Checked(updateCheckState)

        if (checked) {
            setP17([...p17, value])
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            const p = p17.filter((p) => p !== value)
            setP17([...p])
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p17,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'No') {
            setIsP17Checked([false, true])
            setPuntajeTotal(puntajeTotal - trues.length)
            setRespuestas((prevState) => {
                return {
                    ...prevState,
                    [name]: [],
                }
            })
        }
    }

    const buttonClickHandler = (operador: string) => {
        window.scrollTo(0, 0)

        const porcentaje = ((puntajeTotal / 36) * 100).toFixed(0)
        setPorcentajeTotal(+porcentaje)
        console.log('respuesta:', respuestas)
        console.log('item:', isItem)
        console.log('puntaje:', puntajeTotal)

        if (operador === 'sumar') {
            if (isItem === 3 && puntajeTotal < 3) {
                setTitulo('Nivel 1: Marco Teórico')
                setPrimerAnalisis(resultados[1])
                setPrevItem(3)
                setIsItem(11)
            } else if (isItem === 4 && puntajeTotal < 6) {
                setTitulo('Nivel 2: Búsqueda')
                setPrimerAnalisis(resultados[2])
                setPrevItem(4)
                setIsItem(11)
            } else if (isItem === 5 && puntajeTotal < 8) {
                setTitulo('Nivel 3: Generación de Ideas')
                setPrimerAnalisis(resultados[3])
                setPrevItem(5)
                setIsItem(11)
            } else if (isItem === 6 && puntajeTotal < 10) {
                setTitulo('Nivel 4: Factibilidad')
                setPrimerAnalisis(resultados[4])
                setPrevItem(6)
                setIsItem(11)
            } else if (isItem === 7 && puntajeTotal < 23) {
                setTitulo('Nivel 5: Caso de Negocio')
                setPrimerAnalisis(resultados[5])
                setPrevItem(7)
                setIsItem(11)
            } else if (isItem === 8 && puntajeTotal < 26) {
                setTitulo('Nivel 6: Pilotaje - Prototipaje')
                setPrimerAnalisis(resultados[6])
                setPrevItem(8)
                setIsItem(11)
            } else if (isItem === 9 && puntajeTotal < 28) {
                setTitulo('Nivel 7: Implementación')
                setPrimerAnalisis(resultados[7])
                setPrevItem(9)
                setIsItem(11)
            } else {
                setPrevItem(isItem)
                setIsItem(isItem + 1)
            }
        }
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (puntajeTotal >= 28) {
            setTitulo('Nivel 8: Monitoreo, Reporte y Revisión')
            setPrimerAnalisis(resultados[8])
            setIsItem(isItem + 1)
            setPrevItem(10)
        }

        setPorcentajeTotal(+((puntajeTotal / 36) * 100).toFixed(0))

        //TODO: Guardar resultados en la base de datos
    }


    return (
        <div className={`${styles.diagnostico} container`}>
            <form onSubmit={submitHandler}>
                {isItem === 1 && (
                    <>
                        <h2 className={styles.item}>!EMPECEMOS¡ Te haremos algunas preguntas generales para conoceer más de tu organización</h2>
                        <br />
                        <br />
                        <br />
                        <Input3 pregunta={data[1].pregunta} opciones={data[1].opciones} id={data[1].id} onChange={inputHandler} />
                        <Radio pregunta={data[2].pregunta} opciones={data[2].opciones} id={data[2].id} onChange={radioHandler} />
                        <Radio pregunta={data[3].pregunta} opciones={data[3].opciones} id={data[3].id} onChange={radioHandler} />
                        <Radio pregunta={data[4].pregunta} opciones={data[4].opciones} id={data[4].id} onChange={radioHandler} />
                    </>
                )}
                {isItem === 2 && (
                    <>
                        <h2 className={styles.item}>II. Principios de Economía Circular</h2>
                        <Checkbox pregunta={data[5].pregunta} id={data[5].id} opciones={data[5].opciones} onChange={p5Handler} isChecked={isP5Checked} />
                        <Checkbox pregunta={data[6].pregunta} id={data[6].id} opciones={data[6].opciones} onChange={p6Handler} isChecked={isP6Checked} />
                    </>
                )}
                {isItem === 3 && (
                    <>
                        <h2 className={styles.item}>III. Nivel organizacional en madurez de economía circular</h2>
                        <h3 className={styles.item}>
                            A continuación te presentamos una herramienta que te permitirá identificar en qué nivel de madurez en circularidad se encuentra el proyecto,
                            emprendimiento o empresa.
                        </h3>
                        <p className={styles.item}>Responde con la mayor honestidad.</p>
                        <Checkbox pregunta={data[7].pregunta} id={data[7].id} opciones={data[7].opciones} onChange={p7Handler} isChecked={isP7Checked} />
                    </>
                )}
                {isItem === 4 && (
                    <>
                        <Checkbox pregunta={data[8].pregunta} id={data[8].id} opciones={data[8].opciones} onChange={p8Handler} isChecked={isP8Checked} />
                    </>
                )}
                {isItem === 5 && (
                    <>
                        <Checkbox pregunta={data[9].pregunta} id={data[9].id} opciones={data[9].opciones} onChange={p9Handler} isChecked={isP9Checked} />
                    </>
                )}
                {isItem === 6 && (
                    <>
                        <Checkbox pregunta={data[10].pregunta} id={data[10].id} opciones={data[10].opciones} onChange={p10Handler} isChecked={isP10Checked} />
                    </>
                )}
                {isItem === 7 && (
                    <>
                        <Checkbox pregunta={data[11].pregunta} id={data[11].id} opciones={data[11].opciones} onChange={p11Handler} isChecked={isP11Checked} />
                        <Checkbox pregunta={data[12].pregunta} id={data[12].id} opciones={data[12].opciones} onChange={p12Handler} isChecked={isP12Checked} />
                    </>
                )}
                {isItem === 8 && (
                    <>
                        <Checkbox pregunta={data[13].pregunta} id={data[13].id} opciones={data[13].opciones} onChange={p13Handler} isChecked={isP13Checked} />
                    </>
                )}
                {isItem === 9 && (
                    <>
                        <Checkbox pregunta={data[14].pregunta} id={data[14].id} opciones={data[14].opciones} onChange={p14Handler} isChecked={isP14Checked} />
                    </>
                )}
                {isItem === 10 && (
                    <>
                        <p className={styles.item}>Minitoreo, reporte y revisión: Las organizaciones deben asegurar el éxito y la continuidad de la implementación</p>
                        <Checkbox pregunta={data[15].pregunta} id={data[15].id} opciones={data[15].opciones} onChange={p15Handler} isChecked={isP15Checked} />
                        <Checkbox pregunta={data[16].pregunta} id={data[16].id} opciones={data[16].opciones} onChange={p16Handler} isChecked={isP16Checked} />
                        <Checkbox pregunta={data[17].pregunta} id={data[17].id} opciones={data[17].opciones} onChange={p17Handler} isChecked={isP17Checked} />
                    </>
                )}
                {isItem === 11 && (
                    <div className={styles.progreso}>
                        <h1 className={styles.porcentaje}>Porcentaje de avance: {porcentajeTotal}%</h1>
                        {porcentajeTotal === 100 && (
                            <>
                                <Confetti width={size.width} height={size.height} recycle={false} numberOfPieces={400} />
                                <p className={styles.felicitaciones}>Felicitaciones!!! Cumples con todos los requisitos de la norma.</p>
                            </>
                        )}
                        <div className={styles.numeros}>
                            {prevItem === 3 ? <div className={styles.progressNum}>1</div> : <div>1</div>}
                            {prevItem === 4 ? <div className={styles.progressNum}>2</div> : <div>2</div>}
                            {prevItem === 5 ? <div className={styles.progressNum}>3</div> : <div>3</div>}
                            {prevItem === 6 ? <div className={styles.progressNum}>4</div> : <div>4</div>}
                            {prevItem === 7 ? <div className={styles.progressNum}>5</div> : <div>5</div>}
                            {prevItem === 8 ? <div className={styles.progressNum}>6</div> : <div>6</div>}
                            {prevItem === 9 ? <div className={styles.progressNum}>7</div> : <div>7</div>}
                            {prevItem === 10 ? <div className={styles.progressNum}>8</div> : <div>8</div>}
                        </div>
                        <p className={styles.item}>Niveles de madurez en economía circular</p>
                        <div className={styles.resultado}>
                            <p className={styles.titulo}>{titulo}</p>
                            <p className={styles.analisis}>{primerAnalisis}</p>
                        </div>
                    </div>
                )}
                <div className={styles.buttons}>
                    {isItem < 10 && <Button title='Siguiente' type='button' clickHandler={() => buttonClickHandler('sumar')} />}
                    {isItem === 10 && <Button title='Enviar' type='submit' />}
                </div>
            </form>
        </div>
    )
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })
    useEffect(() => {
        window.scrollTo(0, 0)
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        // Add event listener
        window.addEventListener('resize', handleResize)
        // Call handler right away so state gets updated with initial window size
        handleResize()
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
}
export default Diagnostico
