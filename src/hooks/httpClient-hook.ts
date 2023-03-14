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

interface UsuarioTypes {
    nombre: string
    apellidos: string
    email: string
    telefono: string
}

const useHttp = () => {
    const getUser = async (token: string): Promise<UsuarioTypes> => {
        return fetch(`${baseUrl}/api/usuario`, {
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
        return fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }
    const updateUser = async (usuario: { nombre?: string; apellidos?: string; email?: string; telefono?: string }, token: string) => {
        return fetch(`${baseUrl}/api/usuario`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(usuario),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }
    const postDiagnostico = async (token: string, diagnostico: any) => {
        return fetch(`${baseUrl}/api/usuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(diagnostico),
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    const getDiagnosticos = async (token: string): Promise<{ diagnostico_encontrado: DataTypes[] }> => {
        return fetch(`${baseUrl}/api/usuario/diagnosticos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    const getDiagnostico = async (token: string, diagnosticoId: string): Promise<{ diagnostico: DataTypes }> => {
        return fetch(`${baseUrl}/api/usuario/diagnostico/${diagnosticoId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    const deleteDiagnostico = async (token: string, diagnosticoId: string) => {
        return fetch(`${baseUrl}/api/usuario/diagnostico/${diagnosticoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => console.log(err))
    }

    return {
        signupUser,
        loginUser,
        getUser,
        updateUser,
        postDiagnostico,
        getDiagnosticos,
        getDiagnostico,
        deleteDiagnostico,
    }
}

export default useHttp
