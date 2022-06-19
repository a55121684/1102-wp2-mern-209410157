import React from "react";
import { useState } from "react";
import { FormRow_57, Alert_57 } from "../../components";
import { useAppContext } from "../../context/appContext_57";
import Wrapper from "../../assets/wrapper/DashboardFormPage_57";

const Profile_57 = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [location, setLocation] = useState(user && user.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert_57 />}
        <div className="form-center">
          <FormRow_57
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow_57
            type="text"
            labelText="last name"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow_57
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow_57
            type="text"
            name="location"
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile_57;
