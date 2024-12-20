import React from "react";

function Home({ products, addToCart, cart }) {
  return (
    <div className="product-list grid-cols-3 grid gap-3 mx-auto max-w-[1440px]">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item border rounded-xl overflow-hidden "
        >
          <img src={product.image} alt="" />
          <h3 className="">{product.name}</h3>
          <p>{product.description}</p>
          {cart.some((value) => value.id === product.id) ? (
            <button
              className="bg-[#00ff48] px-12 py-4 rounded-2xl"
              onClick={() => addToCart(product)}
            >
              Karzinkadan olib tashlash
            </button>
          ) : (
            <button
              className="bg-[#ffffff] px-12 py-4 rounded-2xl"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Karzinkaga qo'shish
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
