import React from "react";
import { Form, BtnAdd, H2Form, Input } from "./GlobalStyled";

const GeneralInformation = (props) => {
  return (
    <div>
      <H2Form>Personal Information</H2Form>
      <Form onSubmit={props.handleSubmitGeral}>
        <Input
          type="text"
          required
          placeholder="Full Name"
          value={props.inputName}
          onChange={props.onChangeFullName}
        />
        <Input
          type="email"
          required
          placeholder="Email"
          value={props.inputEmail}
          onChange={props.onChangeEmail}
        />
        <Input
          type="tel"
          required
          placeholder="Phone"
          value={props.inputPhone}
          onChange={props.onChangePhone}
        />
        <BtnAdd type="submit">Add</BtnAdd>
      </Form>
      <br />
    </div>
  );
};

export default GeneralInformation;
