const ENV = import.meta.env.VITE_NODE_ENV
const baseUrl = ENV === 'production' ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_DEV_BASE_URL

interface DataTypes {
    _id: string
    puntajeTotal: number
    porcentajeTotal: number
    nivelMadurez: number
    respuestas: {}
    createdAt: Date
}

const useHttp = () => {
    const getUser = async (id: string, token: string) => {
        return fetch(`${baseUrl}/api/usuario/${id}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }
    const signupUser = async (usuario: { email: string; password: string; password2: string }) => {
        return fetch(`${baseUrl}/api/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }
    const loginUser = async (usuario: { email: string; password: string }) => {
        console.log(usuario)
        return fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }
    const postDiagnostico = async (usuarioId: string, token: string, diagnostico: any) => {
        return fetch(`${baseUrl}/api/usuario/${usuarioId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(diagnostico),
        })
            .then(res => res.json())
            .then(data => data)
            .catch((err) => console.log(err))
    }


    const getDiagnosticos = async (usuarioId: string, token: string): Promise<{ diagnostico_encontrado: DataTypes[] }> => {
        return fetch(`${baseUrl}/api/usuario/${usuarioId}/diagnosticos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    const getDiagnostico = async (usuarioId: string, token: string, diagnosticoId: string): Promise<{ diagnostico: DataTypes }> => {
        return fetch(`${baseUrl}/api/usuario/${usuarioId}/diagnostico/${diagnosticoId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    return {
        signupUser,
        loginUser,
        getUser,
        postDiagnostico,
        getDiagnosticos,
        getDiagnostico
    }
}

export default useHttp
