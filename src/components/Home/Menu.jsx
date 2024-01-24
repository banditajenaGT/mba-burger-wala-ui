import React, { useEffect } from "react";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();
  const { cartItems, subTotal, shippingCharges, tax, total } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({ subTotal, shippingCharges, tax, total })
    );
  }, [cartItems, subTotal, shippingCharges, tax, total]);

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      case 3:
        dispatch({ type: "doubleCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;
    }
  };
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burger={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          price={100}
          title="Cheeze burger"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burger={
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          price={300}
          title="Veg Cheeze burger"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burger={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          price={400}
          title="Double Cheeze burger"
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
