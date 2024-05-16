import Cart from "./Cart"

export default function Header({cart, removeFromCart, incrementQuantity, decreaseQuantity, clearCart}) {

return (
<header className="py-5 header">
    <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
                <a href="index.html">
                    <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <Cart
                items={cart}
                removeFromCart={removeFromCart}
                incrementQuantity={incrementQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
              />
            </nav>
        </div>
    </div>
</header>
)
  
}