import { useState, createContext, useEffect, useCallback, PropsWithChildren } from 'react'

const UsuarioContext = createContext({
    isLoggedIn: false,
    userId: '',
    token: '',
    loginData: (usuarioId: string, token: string, expirationDate?: Date) => { },
    logout: () => { },
})

export const UsuarioProvider = ({ children }: PropsWithChildren) => {
    const [userId, setUserId] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>()

    const loginData = useCallback((usuarioId: string, token: string, expirationDate?: Date) => {

        setUserId(usuarioId)
        setToken(token)

        const tokenExpirationTime = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60)
        setTokenExpirationDate(tokenExpirationTime)

        localStorage.setItem('userData', JSON.stringify({ userId: usuarioId, token: token, expiration: tokenExpirationTime.toISOString() }))

    }, [])

    const logout = () => {
        setUserId('')
        setToken('')
        setTokenExpirationDate(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'))
        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {

            loginData(storedData.userId, storedData.token, new Date(storedData.expiration))
        }

    }, [loginData])

    return (
        <UsuarioContext.Provider value={{ isLoggedIn: !!token, userId, token, loginData, logout }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext
