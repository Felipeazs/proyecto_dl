import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import styles from './Navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState)
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src='https://res.cloudinary.com/dqm9xo01m/image/upload/v1671055667/Assets/logo2_mky4qp.png' alt='logo' />
                    </Link>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    zIndex={20}
                    className={styles.drawer}>
                    <div className={styles.close_icon}>
                        <button onClick={toggleDrawer}>
                            <svg stroke='currentColor' fill='currentColor' strokeWidth={0}
                                viewBox='0 0 512 512' color='#000000' height='24px' width='24px'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                            </svg>
                        </button>
                    </div>
                    <ul className={styles.drawer_links}>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'activeLink' : undefined}
                                onClick={toggleDrawer}
                            >Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? 'activeLink' : undefined}
                                onClick={toggleDrawer}
                            >Login</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/cuenta'
                                className={({ isActive }) => isActive ? 'activeLink' : undefined}
                                onClick={toggleDrawer}
                            >Cuenta</NavLink>
                        </li>
                    </ul>
                </Drawer>
                <ul className={styles.links}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        >Login</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/cuenta/:id'
                            className={({ isActive }) => isActive ? 'activeLink' : undefined}
                        >Cuenta</NavLink>
                    </li>
                </ul>
                <button onClick={toggleDrawer}>
                    <svg stroke='currentColor' fill='#ffffff' strokeWidth='0'
                        viewBox='0 0 512 512' height='26px' width='26px'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z'></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
