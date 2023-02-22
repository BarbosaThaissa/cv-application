import React, { useState } from "react";
import GeneralInformation from "./GeneralInformation";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import Result from "./Result";
import { Center } from "./GlobalStyled";

const FormsCV = () => {
  // geral
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  // education
  const [schoolName, setSchoolName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [inputFromSchool, setInputFromSchool] = useState("");
  const [inputTo, setInputTo] = useState("");
  // jobs
  const [companyName, setCompanyName] = useState("");
  const [inputPosition, setInputPosition] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [inputFromJob, setInputFromJob] = useState("");
  const [inputUntil, setInputUntil] = useState("");
  // btns submit
  const [btnGeral, setBtnGeral] = useState({});
  const [btnEducation, setBtnEducation] = useState({});
  const [btnJob, setBtnJob] = useState({});

  const onChangeFullName = (e) => {
    setInputName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setInputPhone(e.target.value);
  };

  const onChangeEschoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const onChangeCourseName = (e) => {
    setCourseName(e.target.value);
  };
  const onChangeInputFromSchool = (e) => {
    setInputFromSchool(e.target.value);
  };
  const onChangeInputTo = (e) => {
    setInputTo(e.target.value);
  };

  const onChangeCompany = (e) => {
    setCompanyName(e.target.value);
  };
  const onChangePosition = (e) => {
    setInputPosition(e.target.value);
  };
  const onChangeMainTasks = (e) => {
    setMainTasks(e.target.value);
  };
  const onChangeFrom = (e) => {
    setInputFromJob(e.target.value);
  };
  const onChangeUntil = (e) => {
    setInputUntil(e.target.value);
  };

  // Add buttons
  const handleSubmitGeral = (e) => {
    e.preventDefault();
    setBtnGeral({
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
    });
  };
  const handleSubmitEducation = (e) => {
    e.preventDefault();
    setBtnEducation({
      school: schoolName,
      course: courseName,
      dateOfStudy: `${inputFromSchool} - ${inputTo}`,
    });
  };
  const handleSubmitJob = (e) => {
    e.preventDefault();
    setBtnJob({
      company: companyName,
      position: inputPosition,
      mainTask: mainTasks,
      dateOfJob: `${inputFromJob} - ${inputUntil}`,
    });
  };

  //Delete buttons
  const handleDeleteGeral = (e) => {
    setBtnGeral({
      name: "",
      email: "",
      phone: "",
    });
  };
  const handleDeleteEducation = (e) => {
    setBtnEducation({
      school: "",
      course: "",
      dateOfStudy: "",
    });
  };
  const handleDeleteJob = (e) => {
    setBtnJob({
      company: "",
      position: "",
      mainTask: "",
      dateOfJob: "",
    });
  };

  const inputButton = { btnGeral, btnEducation, btnJob };

  return (
    <>
      <Center>
        <GeneralInformation
          inputName={inputName}
          onChangeFullName={onChangeFullName}
          inputEmail={inputEmail}
          onChangeEmail={onChangeEmail}
          inputPhone={inputPhone}
          onChangePhone={onChangePhone}
          handleSubmitGeral={handleSubmitGeral}
        />
        <EducationalExperience
          schoolName={schoolName}
          onChangeEschoolName={onChangeEschoolName}
          courseName={courseName}
          onChangeCourseName={onChangeCourseName}
          inputFromSchool={inputFromSchool}
          onChangeInputFromSchool={onChangeInputFromSchool}
          inputTo={inputTo}
          onChangeInputTo={onChangeInputTo}
          handleSubmitEducation={handleSubmitEducation}
        />
        <PracticalExperience
          companyName={companyName}
          onChangeCompany={onChangeCompany}
          inputPosition={inputPosition}
          onChangePosition={onChangePosition}
          mainTasks={mainTasks}
          onChangeMainTasks={onChangeMainTasks}
          inputFromJob={inputFromJob}
          onChangeFrom={onChangeFrom}
          inputUntil={inputUntil}
          onChangeUntil={onChangeUntil}
          handleSubmitJob={handleSubmitJob}
        />
      </Center>
      <Center>
        <Result
          inputButton={inputButton}
          handleDeleteGeral={handleDeleteGeral}
          handleDeleteEducation={handleDeleteEducation}
          handleDeleteJob={handleDeleteJob}
        />
      </Center>
    </>
  );
};

export default FormsCV;
