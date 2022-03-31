import React from "react";
import { useState, useEffect } from "react";
import { Logo_57, FormRow_57 as FormRow_57 } from "../components";
import Wrapper from "../assets/wrapper/Register_57";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlter: false,
};

export const Register_57 = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log("e.target", e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("e.target", e.target);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_57 />
        <h3>Register</h3>
        {/*name input*/}
        <FormRow_57
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="form-input"
        />
        {/* email input */}
        <FormRow_57
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="form-input"
        />
        {/* password input */}
        <FormRow_57
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className="form-input"
        />

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
