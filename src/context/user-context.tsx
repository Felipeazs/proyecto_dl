import { useState, createContext, PropsWithChildren } from 'react'

const UsuarioContext = createContext({
    isLoggedIn: false,
    userId: '',
    token: '',
    usuarioData: {},
    loginData: ({ usuarioId, token, nombre, apellidos, email }: { usuarioId: string, token: string, nombre: string, apellidos: string, email: string }) => { },
    logout: () => { }
})

export const UsuarioProvider = ({ children }: PropsWithChildren) => {
    const [userId, setUserId] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const [usuarioData, setUsuarioData] = useState<{ nombre: string, apellidos: string, email: string }>({ nombre: '', apellidos: '', email: '' })

    const loginData = ({ usuarioId, token, nombre, apellidos, email }: { usuarioId: string, token: string, nombre: string, apellidos: string, email: string }) => {
        console.log(usuarioId)
        setUserId(usuarioId)
        setToken(token)
        setUsuarioData({ nombre, apellidos, email })
    }

    const logout = () => {
        setUserId('')
        setToken('')
    }

    return <UsuarioContext.Provider value={{ isLoggedIn: !!token, userId, token, usuarioData, loginData, logout }}>
        {children}
    </UsuarioContext.Provider>
}

export default UsuarioContext
