import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader";
import toast from "react-hot-toast";
import { getAdminUsers } from "../../redux/actions/admin";

const Users = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error]);

  return (
    <section className="tableClass">
      {loading ? (
        <Loader />
      ) : (
        <main>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((i) => (
                <tr key={i._id}>
                  <td>{i._id}</td>
                  <td>{i.name}</td>
                  <td>
                    <img src={i.photo} alt="User" />
                  </td>
                  <td>{i.role}</td>
                  <td>{i.createdAt.split('T')[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      )}
    </section>
  );
};

export default Users;
