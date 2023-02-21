import React, { useState } from "react";
import { Form } from "./GlobalStyled";

const GeneralInformation = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputButton, setInputButton] = useState({});

  const changeFullName = (e) => {
    setInputName(e.target.value);
  };

  const changeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const changePhone = (e) => {
    setInputPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputButton({
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
    });
    
  };

  return (
    <div>
      {/* full name, email, phone */}
      <h1>Personal Information</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          required
          placeholder="Full Name"
          onChange={(e) => changeFullName(e)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          onChange={(e) => changeEmail(e)}
        />
        <input
          type="tel"
          required
          placeholder="Phone"
          onChange={(e) => changePhone(e)}
        />
        <button type="submit">Add</button>
      </Form>
      <div>
        <p>{inputButton.name}</p>
        <p>{inputButton.email}</p>
        <p>{inputButton.phone}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default GeneralInformation;
