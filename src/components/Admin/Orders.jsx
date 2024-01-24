import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import toast from "react-hot-toast";
import { getAdminOrders, processOrder } from "../../redux/actions/admin";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, error, loading, message } = useSelector(
    (state) => state.admin
  );

  const processOrderHandler = async(id) => {
    await dispatch(processOrder(id));
    dispatch(getAdminOrders());
  };

  useEffect(() => {
    dispatch(getAdminOrders());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message]);

  return (
    <section className="tableClass">
      {loading ? (
        <Loader />
      ) : (
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.cheeseBurger.quantity +
                        i.orderItems.vegCheeseBurger.quantity +
                        i.orderItems.doubleCheeseBurger.quantity}
                    </td>
                    <td>₹{i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>{i.user.name}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                      <button
                        style={{ margin: "0 7px" }}
                        onClick={() => processOrderHandler(i._id)}
                      >
                        <GiArmoredBoomerang />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      )}
    </section>
  );
};

export default Orders;
