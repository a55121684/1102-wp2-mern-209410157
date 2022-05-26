import React, { useReducer, useContext } from "react";
import reducer_57 from "./reducer_57";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./action_57";
import axios from "axios";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
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

  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    console.log(endPoint);
    console.log(currentUser);
    await axios.post(
      `http://localhost:5000/api/v1/auth_57/register_57`,
      currentUser
    );
  };

  return (
    <AppContext_57.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </AppContext_57.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_57);
};

export { AppProvider_57, initialState, useAppContext };
