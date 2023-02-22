import React from "react";
import { Form, BtnAdd, H2Form, Input } from "./GlobalStyled";

const EducationalExperience = (props) => {
  return (
    <div>
      <H2Form>Education</H2Form>
      <Form onSubmit={props.handleSubmitEducation}>
        <Input
          type="text"
          placeholder="School Name"
          required
          value={props.schoolName}
          onChange={props.onChangeEschoolName}
        />
        <Input
          type="text"
          placeholder="Course Name"
          required
          value={props.courseName}
          onChange={props.onChangeCourseName}
        />
        <Input
          type="number"
          placeholder="From ex: 2019"
          required
          value={props.inputFromSchool}
          onChange={props.onChangeInputFromSchool}
        />
        <Input
          type="number"
          placeholder="To ex: 2022"
          required
          value={props.inputTo}
          onChange={props.onChangeInputTo}
        />
        <BtnAdd type="submit">Add</BtnAdd>
      </Form>
      <br />
    </div>
  );
};

export default EducationalExperience;
