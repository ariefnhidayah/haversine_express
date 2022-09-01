require('dotenv').config()
const axios = require('axios')

const getLatitudeLongitude = async (address) => {
    const request = new URLSearchParams({
        apiKey: process.env.HERE_API_KEY,
        q: address
    }).toString()
    const response = await axios.get(process.env.HERE_URL + "geocode?" + request).then(data => {
        return data.data.items[0];
    })

    return response
}

module.exports = {
    getLatitudeLongitude
}