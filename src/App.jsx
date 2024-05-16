import { useState, useEffect } from 'react'

import Header from './components/Header'
import Guitar from './components/Guitar'

import { db } from './data/db'

function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])


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

  return (
    <>

    <Header 
      cart={cart} 
      removeFromCart={removeFromCart} 
      incrementQuantity={incrementQuantity}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}
    />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map(x => 
            <Guitar 
              key={x.id} 
              guitar={x} 
              addToCart={addToCart}
            />)}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
