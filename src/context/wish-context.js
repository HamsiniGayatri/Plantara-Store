import {createContext,useContext,useState } from "react";

const WishListContext = createContext();

const WishListProvider = ({children})=>{
    const [wishlist,setWishlist] = useState([]);

      const addToWishList = (product) => {
    // Prevent duplicates
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

    const removeWishList = (id)=>{
        setWishlist((prev)=>prev.filter((item)=>item.id !== id))
    }
return(
    <>
        <WishListContext.Provider value={{wishlist,addToWishList,removeWishList}}>
            {children}
        </WishListContext.Provider>  
    </>
)
};

const useWishlist = () => useContext(WishListContext);
export { WishListProvider, useWishlist };