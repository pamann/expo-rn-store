import {
  ADD_ORDER
} from '../actions/types';

const initialState = {
  order: {
    items: [],
  }
}
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        order: {
          items: action.payload.cartItems
        }
      }
      default:
        return state
  }
}