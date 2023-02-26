import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/ui/Card'
import Button2 from '../components/ui/Button2'

import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={`${styles.home} container`}>
            <div className={styles.header}>
                <h1 className={styles.titulo}>¿Quieres saber qué tan circular es tu organización?</h1>
                <h2 className={styles.subtitulo}>¿Te atreves a auditarte en base a normas internacionales?</h2>
                <p className={styles.par}>
                    Realiza este diagnóstico de madurez en base a los requisitos de la norma BS 8001:2017: Marco de los principios de la economía circular en las organizaciones y
                    conoce en que punto de la circularidad está tu organización.
                </p>
                <p className={styles.par}>Esta norma establece 8 niveles de madurez, siendo procesos cíclicos de evaluación:</p>
                <div className={styles.numeros}>
                    <span>1</span>
                    <p>Marco contextual: La organización deben determinar la relevancia de la economía circular en su negocio e identificar en donde comenzar.</p>
                </div>
                <div className={styles.numeros}>
                    <span>2</span>
                    <p>
                        Búsqueda: La organización debe velar cuidadosamente por incluir en la visión plan estratégico y dirección de la empresa las actividades de economía
                        circular.
                    </p>
                </div>
                <div className={styles.numeros}>
                    <span>3</span>
                    <p>
                        Generación de ideas: La organización debe desarrollar una lista de ideas/conceptos para atacar los problemas y oportunidades identificadas y priorizadas de
                        acuerdo al visión, plan estratégico y objetivos de la empresa.
                    </p>
                </div>
                <div className={styles.numeros}>
                    <span>4</span>
                    <p>
                        Factibilidad: La organización está en el momento de evaluar la factibilidad de sus ideas priorizadas de acuerdo a la visión, plan estratétigico y objetivos
                        de la empresa.
                    </p>
                </div>
                <div className={styles.numeros}>
                    <span>5</span>
                    <p>
                        Caso de negocio: La organización se encuentra en desarrollo de casos de negocio, asegurando los recursos necesarios para pilotar y prototipas las ideas
                        priorizadas.
                    </p>
                </div>
                <div className={styles.numeros}>
                    <span>6</span>
                    <p>Pilotaje/Prototipado: La organización está experimentando a pequeña escala para deteminar la viabilidad de sus iniciativas de economía circular.</p>
                </div>
                <div className={styles.numeros}>
                    <span>7</span>
                    <p>
                        Implementación: La organización ya tiene resultados de pilotaje y se encuentra en la evaluación de si adopta/integra (o no) las iniciativas y proyectos
                        validados para transitar en un sistema de gestión de economía circular.
                    </p>
                </div>
                <div className={styles.numeros}>
                    <span>8</span>
                    <p>Monitoreo, reporte, y revisión: La organización ya implementó casos de éxito, por lo que debe asegurar la mejora continua de acuerdo a su desempeño.</p>
                </div>
            </div>

            <div>
                <p>Y para esto, la norma audita la aplicación de seis principios de Economía Circular</p>
                <div className={styles.principios}>
                    <Card>
                        <p>Innovación</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675516260/Assets/1_uch85l.png' />
                    </Card>
                    <Card>
                        <p>Administración</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675517586/Assets/2_s5mxp2.png' />
                    </Card>
                    <Card>
                        <p>Colaboración</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675517586/Assets/3_y4mg9j.png' />
                    </Card>
                    <Card>
                        <p>Optimización</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675517586/Assets/4_kxafe9.png' />
                    </Card>
                    <Card>
                        <p>Transparencia</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675517586/Assets/5_fnqits.png' />
                    </Card>
                    <Card>
                        <p>Pensamiento sistémico</p>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1675517586/Assets/6_uzbesn.png' />
                    </Card>
                </div>
            </div>
            <Card>
                <p>
                    Si trabajas en el área de sostenibilidad de una empresa o quieres conocer cómo tu empresa está avanzando hacia la economía circular, te invitamos a utilizar
                    nuestras herramientas de diagnóstico basadas en la norma internacional BSI 8001:2017
                </p>
                <Link to='/diagnostico'>
                    <Button2 title='DIAGNÓSTICO DE MADUREZ EN ECONOMÍA CIRCULAR' />
                </Link>
                <p>Todos los datos que nos entregues serán confidenciales y el resultado sólo será enviado a tu casilla de correo.</p>
            </Card>
        </div>
    )
}

export default Home
