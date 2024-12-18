import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../../store/cartSlice";

function CartPage({ cart }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  return (
    <div className="">
      <h2>Karzinka</h2>
      <div className="grid-cols-3 w-auto items-center grid gap-3 justify-items-center mx-auto max-w-[1440px]">
        {cart.length === 0 ? (
          <p>Karzinkangiz bo'sh.</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="flex flex-col  border pb-3">
              <img className="max-w-[300px] mb-5" src={product.image} alt="" />
              <h4 className="mb-7">{product.name}</h4>
              <button
                className="bg-[#ff0d0d] px-12 py-4 rounded-2xl"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                O'chirish
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartPage;
