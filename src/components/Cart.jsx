import { useMemo } from "react"


export default function Cart({items, removeFromCart, incrementQuantity, decreaseQuantity, clearCart}) {


  const isEmpty = useMemo(() => items.length === 0, [items]);
  const total = useMemo(() => items.reduce((sum, guitar,) => sum + (guitar.price * guitar.quantity), 0), [items])

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
                {items.map(guitar => {
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
                              onClick={() => decreaseQuantity(guitar.id)}
                          >
                              -
                          </button>
                              {guitar.quantity}
                          <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => incrementQuantity(guitar.id)}
                          >
                              +
                          </button>
                      </td>
                      <td>
                          <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => removeFromCart(guitar.id)}
                          >
                              X
                          </button>
                      </td>
                    </tr>)
                  })
                }
              </tbody>
          </table>

          <p className="text-end">Total pagar: <span className="fw-bold">${total}</span></p>
          <button 
            className="btn btn-dark w-100 mt-3 p-2"
            onClick={() => clearCart()}
          >Vaciar Carrito</button>
        </>)}
      </div>
  </div>
  </>

}