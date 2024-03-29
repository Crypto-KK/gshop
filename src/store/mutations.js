import {
  RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS,
  // eslint-disable-next-line no-unused-vars
  RECEIVE_USERINFO, RESET_USERINFO, RECEIVE_GOODS,
  // eslint-disable-next-line no-unused-vars
  RECEIVE_INFO, RECEIVE_RATINGS
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOODTYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  }
}
