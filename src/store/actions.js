import {
  RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress, reqFoodTypes, reqShops
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
  }
}
