import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo_57, FormRow_57 as FormRow_57 } from "../components";
import Wrapper from "../assets/wrapper/Register_57";
import { useAppContext } from "../context/appContext_57";
import Alert_57 from "../components/Alert_57";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
  showAlert: false,
};

export const Register_57 = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    console.log("form", currentUser);
    if (!isMember) {
      registerUser({
        currentUser,
        endPoint: "register_57",
        alertText: "User created Redirecting ...",
      });
    } else {
      loginUser({
        currentUser,
        endPoint: "login_57",
        alertText: "Login Success Redirecting ...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_57 />
        <h3>{values.isMember ? "LOGIN" : "REGISTER"}</h3>
        {showAlert && <Alert_57 />}
        {/*name input*/}
        {!values.isMember && (
          <FormRow_57
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            className="form-input"
          />
        )}
        {/* email input */}
        <FormRow_57
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="form-input"
        />
        {/* password input */}
        <FormRow_57
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="form-input"
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>{" "}
        <p>{values.isMember ? "Not a member yet?" : "Already a member?"}</p>
        <button type="button" className="member-btn" onClick={toggleMember}>
          {values.isMember ? "Register" : "Login"}
        </button>
      </form>
    </Wrapper>
  );
};
