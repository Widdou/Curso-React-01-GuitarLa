
import Cart, {CartProps} from "./Cart"

// type HeaderProps = {
//   cart : CartItem[]
//   removeFromCart : (id : Guitar['id']) => void
//   incrementQuantity : (id : Guitar['id']) => void
//   decreaseQuantity : (id : Guitar['id']) => void
//   clearCart : () => void
//   isEmpty : boolean
//   cartTotal : number
// }

export default function Header({
  items, removeFromCart, incrementQuantity, 
  decreaseQuantity, clearCart, isEmpty, cartTotal,
} : CartProps) {

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
                items={items}
                removeFromCart={removeFromCart}
                incrementQuantity={incrementQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
                isEmpty={isEmpty} 
                cartTotal={cartTotal}
              />
            </nav>
        </div>
    </div>
</header>
)
  
}