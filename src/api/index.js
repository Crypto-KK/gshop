import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodTypes = () => ajax(`${BASE_URL}/index_category`)
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shops`, {longitude, latitude})
