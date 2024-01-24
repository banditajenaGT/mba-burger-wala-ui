import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, ArcElement, Legend } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStats } from "../../redux/actions/admin";
import Loader from "../Layout/Loader";

Chart.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>{title}</h3>
    <p>
      {title === "Income" && "₹"}
      {value}
    </p>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, usersCount, ordersCount, totalIncome } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: ordersCount
          ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(255,0,0,0.9)",
          "rgba(150,0,0,0.9)",
          "rgba(50,0,0,0.9)",
        ],
        borderColor: ["rgba(255,0,0)", "rgba(150,0,0)", "rgba(50,0,0)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading ? (
        <Loader />
      ) : (
        <main>
          <article>
            <Box title={"Users"} value={usersCount} />
            <Box title={"Orders"} value={ordersCount && ordersCount.total} />
            <Box title={"Income"} value={totalIncome} />
          </article>
          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      )}
    </section>
  );
};

export default Dashboard;
