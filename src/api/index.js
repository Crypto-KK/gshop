import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodTypes = () => ajax(`${BASE_URL}/index_category`)
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shops`, {longitude, latitude})

// 搜索商店
export const reqSearchShop = (geohash, keyword) => ajax(`${BASE_URL}/search_shops/`, {geohash, keyword})

// 登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(`${BASE_URL}/login_pwd/`, {name, pwd, captcha}, 'POST')

// 发送验证码
export const reqSendCode = (phone) => ajax(`${BASE_URL}/sendcode/`, {phone})

// 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(`${BASE_URL}/login_sms/`, {phone, code}, 'POST')
// 请求用户信息
export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo/`)
// 退出
export const reqLogout = () => ajax(`${BASE_URL}/logout/`)
