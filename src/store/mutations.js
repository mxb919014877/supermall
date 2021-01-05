import { ADD_COUNTER, ADD_TO_CART }
  from './mutations-types'

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一

  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    // 为ItemInfo模型绑定checked属性
    payload.checked = true
    state.cartList.push(payload)
  }
}