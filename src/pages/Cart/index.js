 import { Navbar } from "../../components/navbar"
 import { useCart } from "../../context/cart-context"
 import { HorizontalProductCard } from "../../components/HorizontalProductCard"
import { PriceDetails } from "../../components/PriceDetails";

 export const Cart = ()=>{
    const {cart} = useCart();
    return (
        <>
         <Navbar />
         <main>
        <div>
            <div>
                <p>My cart</p>
                {
                    cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product}/>)
                }
            </div>
            <PriceDetails />
        </div>
         </main>
        </>
    )
 }