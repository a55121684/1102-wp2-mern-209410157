import React, { useReducer, useContext } from "react";
import reducer_57 from "./reducer_57";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
} from "./action_57";
import axios from "axios";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: "",
  token: "",
  location: "",
  showSidebar: false,
};

const AppContext_57 = React.createContext();

const AppProvider_57 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_57, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };

  const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth_57/register_57",
        currentUser
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        "/api/v1/auth_57/login_57",
        currentUser
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const data = await axiosRegister({
        currentUser,
        endPoint,
        alertText,
      });

      console.log("register data", data);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      console.log(error.response);

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const data = await axiosLogin({
        currentUser,
        endPoint,
        alertText,
      });

      console.log("login data", data);
      const { user, token, location } = data;
      console.log(user, token, location);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.message },
      });
    }
    clearAlert();
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const toggleSidebar = async () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const updateUser = async ({ name, email, lastName, location }) => {};

  return (
    <AppContext_57.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        logoutUser,
        toggleSidebar,
      }}
    >
      {children}
    </AppContext_57.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_57);
};

export { AppProvider_57, initialState, useAppContext };
