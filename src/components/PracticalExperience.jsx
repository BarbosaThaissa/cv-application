import React, { useState } from "react";
import {
  Form,
  BtnAdd,
  BtnDelete,
  H2Form,
  Input,
  ResultStyld,
  Span,
} from "./GlobalStyled";

const PracticalExperience = (props) => {
  return (
    <div>
      <H2Form>Experience</H2Form>
      <Form onSubmit={props.handleSubmitJob}>
        <Input
          type="text"
          placeholder="Company"
          required
          value={props.companyName}
          onChange={props.onChangeCompany}
        />
        <Input
          type="text"
          placeholder="Position"
          required
          value={props.inputPosition}
          onChange={props.onChangePosition}
        />
        <Input
          type="text"
          placeholder="Your main tasks"
          required
          value={props.mainTasks}
          onChange={props.onChangeMainTasks}
        />
        <Input
          type="number"
          placeholder="From ex: 2021"
          required
          value={props.inputFromJob}
          onChange={props.onChangeFrom}
        />
        <Input
          type="number"
          placeholder="To ex: 2022"
          required
          value={props.inputUntil}
          onChange={props.onChangeUntil}
        />

        <BtnAdd type="submit">Add</BtnAdd>
      </Form>
    </div>
  );
};

export default PracticalExperience;
