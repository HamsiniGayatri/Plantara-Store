
import React from "react";
import { Navbar } from "../../components/navbar";
import { useWishlist } from "../../context/wish-context";
import { HorizontalProductCard } from "../../components/HorizontalProductCard"; // adjust path if needed

export const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <>
    <Navbar />
    <div>
      <h1>My Wishlist</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          wishlist.map((product) => (
            <HorizontalProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
    </>
  );
};


