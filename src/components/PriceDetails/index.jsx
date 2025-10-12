import { useCart } from "../../context/cart-context"
import './price.css';

export const PriceDetails = () => {
  const { cart } = useCart();

  // calculate total price of all items in cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = 7;
  const finalAmount = totalPrice + deliveryCharge;

  return (
    <div className="price-summary">
      <h2><b>Price Details</b></h2>

      <div>
        <p>Price ({cart.length} items)</p>
        <p className="priceRs">Rs. {totalPrice}</p>
      </div>

      <div>
        <p>Delivery Charge</p>
        <p className="priceRs">Rs. {deliveryCharge}/-</p>
      </div>

      <div>
        <p><b>Total Amount</b></p>
        <p className="priceRs">Rs. {finalAmount}</p>
      </div>

      <div>
        <button className="btn-1">PLACE ORDER</button>
      </div>
    </div>
  );
};
