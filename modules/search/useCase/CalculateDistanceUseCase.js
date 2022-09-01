const ResponseEntities = require("../../../entities/ResponseEntities");
const { calculateDistance } = require("../../../helpers/calculateDistance");
const { getLatitudeLongitude } = require("../../../helpers/getLatitudeLongitude");

class CalculateDistanceUseCase {
    async execute(payload) {
        const response = new ResponseEntities()
        const { query } = payload
        const from = query.from
        const to = query.to

        try {
            const fromAddressData = await getLatitudeLongitude(from)
            const toAddressData = await getLatitudeLongitude(to)
    
            const fromLatLng = fromAddressData.position
            const toLatLng = toAddressData.position

            const distance = calculateDistance(fromLatLng, toLatLng)
    
            response.data = {
                from,
                to,
                distance
            }
            response.success = true
            response.message = 'Success!'
            return response
        } catch (error) {
            response.message = error.toString()
            return response
        }
        
    }
}

module.exports = CalculateDistanceUseCase;