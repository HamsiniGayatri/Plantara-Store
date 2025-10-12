import { useCart } from "../../context/cart-context";
import { useWishlist } from '../../context/wish-context';
import './product.css';
export const HorizontalProductCard = ({product})=>{
    const { name, price, image, species, specifications } = product;
    //destructuring
    const { cartDispatch } = useCart();
    const {addToWishList} = useWishlist();

    const removeFromCart = ()=>{
        cartDispatch({type: "REMOVE_FROM_CART", payload: product});
    }

    const RemoveAndMove = ()=>{
        cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
        addToWishList(product);
    }
    return(
    <div className="plantCardVertical">
    <img src={image} alt={name} className="plantImageVertical" height="200px" width="200px" />
    <div className="subdiv">
    <h2 className="plantNameVertical">{name}</h2>
    <p className="plantPriceVertical">₹ {price}</p>
    <p className="plantSpeciesVertical">{species}</p>
    <button className="removeFromCart" onClick={removeFromCart}>Remove Cart</button><br/>
    <button className="BuyNow" onClick={RemoveAndMove}>Add to WishList</button>
    </div>
    </div>

    )
}