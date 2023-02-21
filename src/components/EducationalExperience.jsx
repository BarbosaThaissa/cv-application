import React, { useState } from "react";
import { Form } from "./GlobalStyled";

const EducationalExperience = () => {
  const [schoolName, setSchoolName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [inputButton, setInputButton] = useState({});

  const handleEschoolName = (e) => {
    setSchoolName(e.target.value);
  };
  const handleCourseName = (e) => {
    setCourseName(e.target.value)
  };
  const handleInputFrom = (e) => {
    setInputFrom(e.target.value)
  };
  const handleInputTo = (e) => {
    setInputTo(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputButton({
      school: schoolName,
      course: courseName,
      dateOfStudy: `${inputFrom} - ${inputTo}`,
    });
  };

  return (
    <div>
      {/*nome da escola, título do estudo, data do estudo/ school name, title of study, date of study */}
      <h1>EducationalExperience</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="School Name"
          required
          onChange={(e) => handleEschoolName(e)}
        />
        <input
          type="text"
          placeholder="Course Name"
          required
          onChange={(e) => handleCourseName(e)}
        />
        <input
          type="number"
          placeholder="From ex: 2019"
          required
          onChange={(e) => handleInputFrom(e)}
        />
        <input
          type="number"
          placeholder="To ex: 2022"
          required
          onChange={(e) => handleInputTo(e)}
        />
        <button type="submit">Add</button>
      </Form>
      <div>
        <p>{inputButton.school}</p>
        <p>{inputButton.course}</p>
        <p>{inputButton.dateOfStudy}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default EducationalExperience;
