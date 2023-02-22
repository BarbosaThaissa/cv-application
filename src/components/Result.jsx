import React from "react";
import { ResultStyld, Span, BtnDelete } from "./GlobalStyled";

const Result = (props) => {
  return (
    <ResultStyld>
      <h3>Personal Information</h3>
      <p>
        <Span>Name:</Span> {props.inputButton.btnGeral.name}
      </p>
      <p>
        <Span>E-mail:</Span> {props.inputButton.btnGeral.email}
      </p>
      <p>
        <Span>Phone:</Span> {props.inputButton.btnGeral.phone}
      </p>
      <BtnDelete onClick={props.handleDeleteGeral}>Delete</BtnDelete>
      <br />
      <h3>Education</h3>
      <p>
        <Span>School:</Span> {props.inputButton.btnEducation.school}
      </p>
      <p>
        <Span>Course:</Span> {props.inputButton.btnEducation.course}
      </p>
      <p>
        <Span>Date Of Study:</Span> {props.inputButton.btnEducation.dateOfStudy}
      </p>
      <BtnDelete onClick={props.handleDeleteEducation}>Delete</BtnDelete>
      <br />
      <h3>Experience</h3>
      <p>
        <Span>Company:</Span> {props.inputButton.btnJob.company}
      </p>
      <p>
        <Span>Position:</Span> {props.inputButton.btnJob.position}
      </p>
      <p>
        <Span>Main Tasks:</Span> {props.inputButton.btnJob.mainTask}
      </p>
      <p>
        <Span>Date Of Job:</Span> {props.inputButton.btnJob.dateOfJob}
      </p>
      <BtnDelete onClick={props.handleDeleteJob}>Delete</BtnDelete>
    </ResultStyld>
  );
};

export default Result;
