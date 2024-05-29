import type { CartItem } from "../types"
export type CartActions = 
  {type: 'empty-cart' } |
  {type: 'add-to-cart', payload : {item : CartItem } } | 
  {type: 'remove-from-cart', payload : {id : CartItem['id'] } } | 
  {type: 'increment-quantity', payload : {id : CartItem['id'] } } | 
  {type: 'decrement-quantity', payload : {id : CartItem['id'] } }


type CartState = {
  cart: CartItem[]
  total: number
}

const getLocalStorageCart = () : CartItem[] => {
  const cart = localStorage.getItem('cart-items')
  return cart ? JSON.parse(cart) : []
}

export const initialState : CartState = {
  cart: getLocalStorageCart(),
  total: 0
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5


export const CartReducer = (
  state  : CartState = initialState,
  action : CartActions
) => {

  if(action.type === 'empty-cart') {
    return {
      ...state,
      cart: []
    }
  }

  if(action.type === 'add-to-cart') {


    const itemCart = state.cart.find(item => item.id === action.payload.item.id)
    let udpatedCart : CartItem[] = [];

    if(itemCart) {  // Increment Item quantity in Cart
      udpatedCart = state.cart.map(item => {
        if(item.id === action.payload.item.id) {
          if(item.quantity < MAX_ITEMS) {
            return {...item, quantity: item.quantity++}
          } else {
            return item
          }
        } else {
          return item
        }
      })

    } else {  // Add new Item to Cart
      const newItem = {...action.payload.item, quantity: 1}
      udpatedCart = [...state.cart, newItem]
    }

    return {
      ...state,
      cart: udpatedCart
    }
  }
  
  if(action.type === 'remove-from-cart') {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }
  }
  
  if(action.type === 'increment-quantity') {

    return {
      ...state,
      cart: state.cart.map(item => {
        if(item.id === action.payload.id) {
          if(item.quantity < MAX_ITEMS) {
            return {...item, quantity: item.quantity++}
          }
        }

        return item
      })
    }

  }
  
  if(action.type === 'decrement-quantity') {
    return {
      ...state,
      cart: state.cart.map(item => {
        if(item.id == action.payload.id) {
          if(item.quantity > MIN_ITEMS) {
            return {...item, quantity: item.quantity--}
          }
        }

        return item
      })
    } 
  }

  return state

}