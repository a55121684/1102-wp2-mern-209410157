import React, { useReducer, useContext } from "react";
import reducer_57 from "./reducer_57";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./action_57";

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
  return (
    <AppContext_57.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext_57.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_57);
};

export { AppProvider_57, initialState, useAppContext };
