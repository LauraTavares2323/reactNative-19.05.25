const BASE_URL = 'http://localhost:3030'

export async function login(email, password){
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    return response.json
}

export async function cadastro(usuario){
    const response = await fetch(`${BASE_URL}/cadastro`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({usuario})
    })
    return response.json
}