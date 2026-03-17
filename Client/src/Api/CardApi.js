const backend_url = import.meta.env.VITE_BACKEND_URL

export async function postCard(name, message, font, templateId , occasion, age, date, location) {
    const response = await fetch(`${backend_url}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, font , templateId, occasion, age, date, location})
    })
    const result = await response.json()
    if (response.ok) {
        return { success: true, res: result.id }
    } else {
        return { success: false, res: result.message }
    }
}

export async function getCardById(id) {
    const response = await fetch(`${backend_url}/card/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    const result = await response.json()
    console.log("result" , result)
    if (response.ok) {
        return { success: true, res: result.card }
    } else {
        return { success: false, res: result.message }
    }
}
