const baseUrl = import.meta.env.BASE_URL

const useHttp = () => {
    const signupUser = async (usuario: { email: string, pass: string }) => {
        return fetch(`${baseUrl}/api/usuarios/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
    }

    const loginUser = async (usuario: { email: string, pass: string }) => {
        return fetch(`${baseUrl}/api/usuarios/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
    }

    return {
        signupUser,
        loginUser,
    }
}

export default useHttp
