const API_KEY = "0e7c6b534f6642bd886130121241907"
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
    try {
        const queryString = `&q=${city}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export { show }