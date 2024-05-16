
import { useState, useEffect, useMemo } from 'react'
import { db } from './../data/db'


export const useCart = () => {

  console.log('From useCart hook...');

  
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, guitar,) => sum + (guitar.price * guitar.quantity), 0), [cart]);

  function addToCart(item) {

    const itemExists = cart.findIndex(guitar => guitar.id === item.id);

    if(itemExists >= 0) {

      const udpatedCart = [...cart];
      udpatedCart[itemExists].quantity++;
      setCart(udpatedCart);

    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }

  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function incrementQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id == id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }    
      return item
    })

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })

    const noEmptyItems = updatedCart.filter(guitar => guitar.quantity > 0);
    
    setCart(noEmptyItems);
  }

  function clearCart() {
    setCart([]);
  }

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  }

}