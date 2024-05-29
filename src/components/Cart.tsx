import { useMemo } from "react"
import { CartItem, Guitar } from "../types"
import { CartActions } from "../reducers/cart-reducer"

export type CartProps = {
  cart : CartItem[]
  dispatch : React.Dispatch<CartActions>
}


export default function Cart({cart, dispatch}: CartProps) {

  
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, guitar,) => sum + (guitar.price * guitar.quantity), 0), [cart]);


  return <>
    <div className="carrito">
      <img className="img-fluid" src="img/carrito.png" alt="imagen carrito" />

      <div id="carrito" className="bg-white p-3">

        {isEmpty ? (
          <p className="text-center">El carrito esta vacio</p>
        ) : (<>
          <table className="w-100 table">
              <thead>
                  <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                {cart.map(guitar => {
                  return (
                    <tr key={guitar.id}>
                      <td >
                          <img className="img-fluid" src={`img/${guitar.image}.jpg`} alt="imagen guitarra" />
                      </td>
                      <td>{guitar.name}</td>
                      <td className="fw-bold">
                              ${guitar.price}
                      </td>
                      <td className="flex align-items-start gap-4">
                          <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => dispatch(
                                {type: 'decrement-quantity', payload: {id: guitar.id}}
                              )}
                          >
                              -
                          </button>
                              {guitar.quantity}
                          <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => dispatch(
                                {type: 'increment-quantity', payload: {id: guitar.id}}
                              )}
                          >
                              +
                          </button>
                      </td>
                      <td>
                          <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => dispatch(
                                {type: 'remove-from-cart', payload: {id: guitar.id}}
                              )}
                          >
                              X
                          </button>
                      </td>
                    </tr>)
                  })
                }
              </tbody>
          </table>

          <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
          <button 
            className="btn btn-dark w-100 mt-3 p-2"
            onClick={() => dispatch( {type: 'empty-cart'} )}
          >Vaciar Carrito</button>
        </>)}
      </div>
  </div>
  </>

}