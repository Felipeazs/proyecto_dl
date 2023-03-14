import React, { useState, useEffect, useContext, useRef, FormEvent, ChangeEvent, MutableRefObject } from 'react'

import { useNavigate } from 'react-router-dom'
import useWindowSize from '../utils/Windows'

import UsuarioContext from '../context/user-context'
import useHttp from '../hooks/httpClient-hook'

import Radio from '../components/ui/Radio'
import Checkbox from '../components/ui/Checkbox'
import Button from '../components/ui/Button'
import Button3 from '../components/ui/Button3'
import styles from './Diagnostico.module.css'

import Confetti from 'react-confetti'

import data from '../assets/preguntas.json'
import mensajes from '../assets/resultados.json'

const Diagnostico = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const navigate = useNavigate()
    const { postDiagnostico, getDiagnosticos } = useHttp()
    const { isLoggedIn, userId, token } = useContext(UsuarioContext)
    const [proyectos, setProyectos] = useState([])
    const [isItem, setIsItem] = useState(1)
    const [titulo, setTitulo] = useState('')
    const [prevItem, setPrevItem] = useState(0)
    const [respuestas, setRespuestas] = useState<string[]>([])
    const [puntajeTotal, setPuntajeTotal] = useState<number>(0)
    const [porcentajeTotal, setPorcentajeTotal] = useState<number>(0)
    const [primerAnalisis, setPrimerAnalisis] = useState<string>('')
    const [isP2Checked, setIsP2Checked] = useState<string>('')
    const [isP3Checked, setIsP3Checked] = useState<string>('')
    const [isP4Checked, setIsP4Checked] = useState<string>('')
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

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
            return
        }

        const fetching = async () => {
            const { diagnostico_encontrado } = await getDiagnosticos(token)
            setProyectos(diagnostico_encontrado)
        }
        fetching()
    }, [])

    const proyectoHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })

        if (value) {
            const proyecto = proyectos.find(p => p.respuestas[1] === value)
            setIsP2Checked(proyecto.respuestas[2])
            setearRespuestas(2, proyecto.respuestas[2])
            setIsP3Checked(proyecto.respuestas[3])
            setearRespuestas(3, proyecto.respuestas[3])
            setIsP4Checked(proyecto.respuestas[4])
            setearRespuestas(4, proyecto.respuestas[4])

            const p5arr = data[5].opciones.filter((ele, i) => {
                if (proyecto.respuestas[5].includes(ele)) {
                    isP5Checked[i] = true
                    return i
                }
            })
            setIsP5Checked(isP5Checked)
            setP5(p5arr)
            setearRespuestas(5, p5arr)

            const p6arr = data[6].opciones.filter((ele, i) => {
                if (proyecto.respuestas[6].includes(ele)) {
                    isP6Checked[i] = true
                    return i
                }
            })
            setIsP6Checked(isP6Checked)
            setP6(p6arr)
            setearRespuestas(6, p6arr)

        } else {
            setIsP2Checked('')
            setIsP3Checked('')
            setIsP4Checked('')
            setIsP5Checked(new Array(7).fill(false))
            setIsP6Checked(new Array(7).fill(false))
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })

    }

    const setearRespuestas = (name: number, value: any) => {
        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
        if (name === '2') {
            setIsP2Checked(value)
        } else if (name === '3') {
            setIsP3Checked(value)
        } else if (name === '4') {
            setIsP4Checked(value)
        }
    }

    const p5Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[5].opciones.indexOf(value)

        const updateCheckState = isP5Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP5Checked(updateCheckState)

        let p: string[]
        if (checked) {
            p = [...p5, value]
            setP5(p)
        } else {
            p = p5.filter((p) => p !== value)
            setP5(p)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p6, value]
            setP6(p)
        } else {
            p = p6.filter((p) => p !== value)
            setP6(p)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p7, value]
            setP7(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p7.filter((p) => p !== value)
            setP7(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p8, value]
            setP8(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p8.filter((p) => p !== value)
            setP8(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p9, value]
            setP9(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p9.filter((p) => p !== value)
            setP9(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p10, value]
            setP10(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p10.filter((p) => p !== value)
            setP10(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p11, value]
            setP11(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p11.filter((p) => p !== value)
            setP11(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
            }
        })

        const trues = updateCheckState.filter((i) => i === true)
        if (value === 'Ninguno') {
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

        let p: string[]
        if (checked) {
            p = [...p12, value]
            setP12(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p12.filter((p) => p !== value)
            setP12(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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
        }
    }

    const p13Handler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target

        const position = data[13].opciones.indexOf(value)

        const updateCheckState = isP13Checked.map((item, index) => (index === position ? !item : item))
        updateCheckState[updateCheckState.length - 1] = false
        setIsP13Checked(updateCheckState)

        let p: string[]
        if (checked) {
            p = [...p13, value]
            setP13(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p13.filter((p) => p !== value)
            setP13(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p14, value]
            setP14(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p14.filter((p) => p !== value)
            setP14(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p15, value]
            setP15(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p15.filter((p) => p !== value)
            setP15(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        let p: string[]
        if (checked) {
            p = [...p16, value]
            setP16(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p16.filter((p) => p !== value)
            setP16(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

        console.log(updateCheckState)

        let p: string[]
        if (checked) {
            p = [...p17, value]
            setP17(p)
            setPuntajeTotal(puntajeTotal + 1)
        } else {
            p = p17.filter((p) => p !== value)
            setP17(p)
            setPuntajeTotal(puntajeTotal - 1)
        }

        setRespuestas((prevState) => {
            return {
                ...prevState,
                [name]: p,
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

    const buttonClickHandler = async () => {
        window.scrollTo(0, 0)

        const porcentaje = ((puntajeTotal / 36) * 100).toFixed(0)
        setPorcentajeTotal(+porcentaje)

        if (isItem === 3 && puntajeTotal < 3) {
            setTitulo('Nivel 1: Marco Teórico')
            setPrimerAnalisis(mensajes[1])
            setPrevItem(3)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 4 && puntajeTotal < 6) {
            setTitulo('Nivel 2: Búsqueda')
            setPrimerAnalisis(mensajes[2])
            setPrevItem(4)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 5 && puntajeTotal < 8) {
            setTitulo('Nivel 3: Generación de Ideas')
            setPrimerAnalisis(mensajes[3])
            setPrevItem(5)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 6 && puntajeTotal < 10) {
            setTitulo('Nivel 4: Factibilidad')
            setPrimerAnalisis(mensajes[4])
            setPrevItem(6)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 7 && puntajeTotal < 23) {
            setTitulo('Nivel 5: Caso de Negocio')
            setPrimerAnalisis(mensajes[5])
            setPrevItem(7)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 8 && puntajeTotal < 26) {
            setTitulo('Nivel 6: Pilotaje - Prototipaje')
            setPrimerAnalisis(mensajes[6])
            setPrevItem(8)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 9 && puntajeTotal < 28) {
            setTitulo('Nivel 7: Implementación')
            setPrimerAnalisis(mensajes[7])
            setPrevItem(9)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else if (isItem === 10 && puntajeTotal >= 28) {
            setTitulo('Nivel 8: Monitoreo, Reporte y Revisión')
            setPrimerAnalisis(mensajes[8])
            setPrevItem(10)
            setIsItem(11)
            formRef.current!.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
        } else {
            setPrevItem(isItem)
            setIsItem(isItem + 1)
        }
    }

    const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nivelMadurez = prevItem - 1

        const diagnostico = {
            puntajeTotal,
            porcentajeTotal: ((+puntajeTotal / 36) * 100).toFixed(0),
            nivelMadurez,
            respuestas,
        }

        await postDiagnostico(token, diagnostico)
    }

    return (
        <div className={`${styles.diagnostico} container`}>
            <form onSubmit={submitHandler} ref={formRef}>
                {isItem === 1 && (
                    <>
                        <h2 className={styles.item}>!EMPECEMOS¡ Te haremos algunas preguntas generales para conoceer más de tu organización</h2>
                        <br />
                        <br />
                        <br />
                        <div className={styles.input_nuevo}>
                            <label htmlFor="">1. Selecciona el proyecto que deseas reevaluar o escribe el nombre del nuevo proyecto:</label>
                            <select name="1" onChange={proyectoHandler}>
                                <option value=''>Selecciona un proyecto</option>
                                {proyectos && proyectos
                                    .map((d) => d.respuestas[1])
                                    .filter((item, index, arr) => arr.indexOf(item) === index)
                                    .sort()
                                    .map((f, i) => (
                                        <option value={f} key={i}>
                                            {f}
                                        </option>
                                    ))}
                            </select>
                            <input type="text" name="1" placeholder="Nombre del nuevo proyecto" onChange={inputHandler} />
                        </div>
                        <Radio pregunta={data[2].pregunta} opciones={data[2].opciones} id={data[2].id} isChecked={isP2Checked} onChange={radioHandler} />
                        <Radio pregunta={data[3].pregunta} opciones={data[3].opciones} id={data[3].id} isChecked={isP3Checked} onChange={radioHandler} />
                        <Radio pregunta={data[4].pregunta} opciones={data[4].opciones} id={data[4].id} isChecked={isP4Checked} onChange={radioHandler} />
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
                        <Button3 title="Ir a la cuenta" type="button" clickHandler={() => { navigate(`/usuario/:${userId}`) }} />
                    </div>
                )}
                <div className={styles.buttons}>{isItem !== 11 && <Button title='Siguiente' type='button' clickHandler={buttonClickHandler} />}</div>
            </form>
        </div >
    )
}

export default Diagnostico
