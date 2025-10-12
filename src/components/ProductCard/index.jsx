import './productCard.css';
import { useCart } from '../../context/cart-context';
import { findProductInCart } from '../../utils/findProductInCart';
import {useNavigate} from "react-router-dom";
export const ProductCard = ({ product }) => {
  const { name, price, image, species, specifications } = product;//destructuring

  const { cart,cartDispatch } = useCart();
  const navigate = useNavigate();

  // eslint-disable-next-line no-undef
  const isProductInCart = findProductInCart(cart,product.id);
  const onCartClick = ()=>{
    !isProductInCart ?
     cartDispatch({
      type:'ADD_TO_CART',
      payload:{product}
     }) : navigate('/cart')
  }

  const handleBuyNow = async () => {
  try {
    // Call backend to create order
    const res = await fetch("http://localhost:5000/api/payment/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price }), // product price
    });

    const order = await res.json();

    // Razorpay options
    const options = {
      key: "YOUR_KEY_ID", // Replace with your Razorpay Key
      amount: order.amount,
      currency: order.currency,
      name: "GoVerdana Store",
      description: `Purchase: ${name}`,
      order_id: order.id,
      handler: function (response) {
        alert("✅ Payment successful! ID: " + response.razorpay_payment_id);
        // You can redirect to a success page or store details in DB
        navigate("/"); 
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
      },
      theme: { color: "#064e3b" }, // Dark green shade
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Payment failed:", err);
  }
};

  return (
    <div className="mainDiv">
      <img src={image} alt={name} className="image" height="200px" width="200px"/>
      <h2 className="BigText">{name}</h2>
      <p className="ParaText-1">₹ {price}</p>
      <p className="ParaText-2">{species}</p>
      <ul className="lists">
        <li><strong>Sunlight:</strong> {specifications.sunlight}</li>
        <li><strong>Water:</strong> {specifications.water}</li>
        <li><strong>Height:</strong> {specifications.height}</li>
      </ul>
      <button className="addToCart" onClick={()=>onCartClick(product)} >
        
        {
          isProductInCart ? '🛍️ Go to Cart' : '🪴 Add to Cart'
        }
        </button><br/>

      <button className="buyNow" onClick={handleBuyNow}>🛒 Buy Now</button>
    </div>
  );
};
