import React from "react";
import { useState, useEffect } from "react";
import { Logo_57, FormRow_57 as FormRow_57 } from "../components";
import Wrapper from "../assets/wrapper/Register_57";
import { useAppContext } from "../context/appContext_57";
import Alert_57 from "../components/Alert_57";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

export const Register_57 = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_57 />
        <h3>Register</h3>
        {showAlert && <Alert_57 />}
        {/*name input*/}
        <FormRow_57
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
          className="form-input"
        />
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
        </button>
      </form>
    </Wrapper>
  );
};
