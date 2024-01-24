import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/actions/order";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../Layout/Loader";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { order, error, loading } = useSelector((state) => state.orders);

  // console.js:213 Warning: validateDOMNesting(...): <p> cannot appear as a descendant of <p>

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error]);

  return (
    <section className="orderDetail">
      {order !== undefined && loading === false ? (
        <main>
          <h1>Order Detail</h1>
          <div>
            <h1>Shipping</h1>
            <div> 
              <b>Address</b>
              <p>{`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pincode}`}</p>
            </div>
          </div>
          <div>
            <h1>Contact</h1>
            <div>
              <b>Name</b>
              <p>{order.user.name}</p>
            </div>
            <div>
              <b>Phone</b>
              <p>{order.shippingInfo.phoneNo}</p>
            </div>
          </div>
          <div>
            <h1>Status</h1>
            <div>
              <b>Order Status</b>
              <p>{order.orderStatus}</p>
            </div>
            <div>
              <b>Placed At</b>
              <p>{order.createdAt.split("T")[0]}</p>
            </div>
            <div>
              <b>Delivered At</b>
              <p>
                {order.deliveredAt
                  ? order.deliveredAt.split("T")[0]
                  : "Not Delivered Yet"}
              </p>
            </div>
          </div>
          <div>
            <h1>Payment</h1>
            <div>
              <b>Payment Method</b>
              <p>{order.paymentMethod}</p>
            </div>
            <div>
              <b>Payment Reference</b>
              <p>
                {order.paymentMethod === "Online" ? order.paymentInfo : "NA"}
              </p>
            </div>
            <div>
              <b>Paid At</b>
              <p>
                {order.paymentMethod === "Online"
                  ? order.paidAt.split("T")[0]
                  : "NA"}
              </p>
            </div>
          </div>
          <div>
            <h1>Amount</h1>
            <div>
              <b>Items Total</b>
              <p>₹{order.itemsPrice}</p>
            </div>
            <div>
              <b>Shipping Charges</b>
              <p>₹{order.shippingCharges}</p>
            </div>
            <div>
              <b>Tax</b>
              <p>₹{order.taxCharges}</p>
            </div>
            <div>
              <b>Total Amount</b>
              <p>₹{order.totalAmount}</p>
            </div>
          </div>
          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Cheeze Burger</h4>
              <div>
                <span>{order.orderItems.cheeseBurger.quantity}</span> x{" "}
                <span>₹{order.orderItems.cheeseBurger.price}</span>
              </div>
            </div>
            <div>
              <h4>Veg Cheeze Burger</h4>
              <div>
                <span>{order.orderItems.vegCheeseBurger.quantity}</span> x{" "}
                <span>₹{order.orderItems.vegCheeseBurger.price}</span>
              </div>
            </div>
            <div>
              <h4>Double Cheeze Burger</h4>
              <div>
                <span>{order.orderItems.doubleCheeseBurger.quantity}</span> x{" "}
                <span>₹{order.orderItems.doubleCheeseBurger.price}</span>
              </div>
            </div>
            <div style={{ fontWeight: "800", letterSpacing: "3px" }}>
              <h3>Sub Total</h3>
              <div>₹{order.itemsPrice}</div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderDetail;
