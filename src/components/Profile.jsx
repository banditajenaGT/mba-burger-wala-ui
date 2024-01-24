import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/user";
import Loader from "./Layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading,user } = useSelector((state) => state.auth);

  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <section className="profile">
      {loading ? (
        <Loader />
      ) : (
        <main>
          <motion.img src={user && user.photo} alt="User" {...options} />
          <motion.h5 {...options} transition={{ delay: "0.4" }}>
           {user && user.name}
          </motion.h5>
          {user && user.role === "admin" && (
            <>
              <motion.div {...options} transition={{ delay: "0.5" }}>
                <Link to="/admin/dashboard">
                  <MdDashboard /> Dashboard
                </Link>
              </motion.div>
            </>
          )}
          <motion.div
            initial={{ x: "-100%", opacity: "0" }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: "0.6" }}
          >
            <Link to="/orders">Orders</Link>
          </motion.div>
          <motion.button
            initial={{ x: "-100%", opacity: "0" }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: "0.7" }}
            onClick={logoutHandler}
          >
            Logout
          </motion.button>
        </main>
      )}
    </section>
  );
};

export default Profile;
