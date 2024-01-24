import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailed",
      payload: error.response.data.message,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutUserRequest",
    });
    const { data } = await axios.delete(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({
      type: "logoutUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutUserFailed",
      payload: error.response.data.message,
    });
  }
};

export const contact = (name, email, text) => async (dispatch) => {
  try {
    dispatch({
      type: "contactRequest",
    });
    const { data } = await axios.post(
      `${server}/contact`,
      {
        name,
        email,
        text,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "contactSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "contactFailed",
      payload: error.response.data.message,
    });
  }
};
