const calculateDistance = (location1, location2) => {
    const earthDiameter = 6371
    const latitude1 = location1.lat
    const longitude1 = location1.lng
    const latitude2 = location2.lat
    const longitude2 = location2.lng

    return earthDiameter * (2 * Math.atan2(Math.sqrt(Math.sin((( latitude2 * ( Math.PI / 180 ) - ( latitude1 * ( Math.PI / 180 )))) / 2 ) * Math.sin((( latitude2 * ( Math.PI / 180 ) - ( latitude1 * ( Math.PI / 180 )))) / 2 ) + Math.cos((latitude1 * ( Math.PI / 180 ))) * Math.cos((latitude2 * ( Math.PI / 180 ))) * Math.sin((( longitude2 * ( Math.PI / 180 ) - ( longitude1 * ( Math.PI / 180 )))) / 2 ) * Math.sin((( longitude2 * ( Math.PI / 180 ) - ( longitude1 * ( Math.PI / 180 )))) / 2 ) ), Math.sqrt(1 - (Math.sin((( latitude2 * ( Math.PI / 180 ) - ( latitude1 * ( Math.PI / 180 )))) / 2 ) * Math.sin((( latitude2 * ( Math.PI / 180 ) - ( latitude1 * ( Math.PI / 180 )))) / 2 ) + Math.cos((latitude1 * ( Math.PI / 180 ))) * Math.cos((latitude2 * ( Math.PI / 180 ))) * Math.sin((( longitude2 * ( Math.PI / 180 ) - ( longitude1 * ( Math.PI / 180 )))) / 2 ) * Math.sin((( longitude2 * ( Math.PI / 180 ) - ( longitude1 * ( Math.PI / 180 )))) / 2 )))));
}

module.exports = {
    calculateDistance
}