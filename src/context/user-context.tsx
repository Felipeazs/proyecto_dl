import { useState, createContext, PropsWithChildren } from 'react'

const UsuarioContext = createContext({
    isLoggedIn: false,
    userId: '',
    token: '',
    loginData: (usuario: { id: string, token: string }) => { },
    logout: () => { }
})

export const UsuarioProvider = ({ children }: PropsWithChildren) => {
    const [userId, setUserId] = useState<string>('')
    const [token, setToken] = useState<string>('')

    const loginData = (usuario: { id: string, token: string }) => {
        setUserId(usuario.id)
        setToken(usuario.token)
    }

    const logout = () => {
        setUserId('')
        setToken('')

    }

    return <UsuarioContext.Provider value={{ isLoggedIn: !!token, userId, token, loginData, logout }}>
        {children}
    </UsuarioContext.Provider>
}
