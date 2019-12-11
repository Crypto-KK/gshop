import {
  RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS, RECEIVE_USERINFO,
  RESET_USERINFO, RECEIVE_RATINGS, RECEIVE_INFO, RECEIVE_GOODS
} from './mutation-types'
import {
  reqAddress, reqFoodTypes, reqShops, reqUserInfo, reqLogout, reqShopGoods,
  reqShopInfo, reqShopRatings
} from '../api'
export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if (result.code === 0) {
      const address = result.data
      // 提交mutations
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getFoodTypes ({commit, state}) {
    // 发送异步ajax
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const foodTypes = result.data
      // 提交mutations
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  },
  async getShops ({commit, state}) {
    // 发送异步ajax
    const {latitude, longitude} = state
    const result = await reqShops(latitude, longitude)
    if (result.code === 0) {
      const shops = result.data
      // 提交mutations
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USERINFO)
    }
  },
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getShopGoods ({commit}, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      cb && cb()
    }
  }
}
