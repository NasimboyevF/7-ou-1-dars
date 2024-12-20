import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cartSlice";

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
          cart.map((product, index) => (
            <div key={product.id} className="flex flex-col  border pb-3">
              <img className="max-w-[300px] mb-5" src={product.image} alt="" />
              <h4 className="">{product.name}</h4>
              <p>{product.price}</p>
              <div className="flex mx-auto my-6 border items-center justify-between px-2 py-3 w-[100px]">
                <button
                  className="w-[30px] flex items-center justify-center h-[30px] text-3xl border rounded-full"
                  onClick={() => dispatch(increaseQuantity(index))}
                >
                  +
                </button>
                <p className="">{product.quantity}</p>
                <button
                  className=" w-[30px] flex items-center justify-center h-[30px] text-3xl border rounded-full"
                  onClick={() => dispatch(decreaseQuantity(index))}
                >
                  -
                </button>
              </div>
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
      <p>
        {(() => {
          let sum = 0;
          cart.map((value) => {
            sum += value.quantity * value.price;
          });
          return sum;
        })()}{" som"}
      </p>
    </div>
  );
}

export default CartPage;
