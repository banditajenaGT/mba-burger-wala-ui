import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement} disabled={value === 0}>
        -
      </button>
      <input type="number" value={value} onChange={(e) => e.target.value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();

  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      doubleCheeseBurger: { quantity: doubleCheeseBurger },
    },
    subTotal,
    shippingCharges,
    tax,
    total,
  } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({subTotal, shippingCharges, tax, total})
    );
  }, [cartItems, subTotal, shippingCharges, tax, total]);

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "doubleCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };
  const decrement = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "doubleCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          increment={() => {
            increment(1);
          }}
          decrement={() => {
            decrement(1);
          }}
          value={cheeseBurger}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          increment={() => {
            increment(2);
          }}
          decrement={() => {
            decrement(2);
          }}
          value={vegCheeseBurger}
        />
        <CartItem
          title={"Double Cheese Burger"}
          img={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          increment={() => {
            increment(3);
          }}
          decrement={() => {
            decrement(3);
          }}
          value={doubleCheeseBurger}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>

          {total > 0 && <Link to="/shipping">Checkout</Link>}
        </article>
      </main>
    </section>
  );
};

export default Cart;
