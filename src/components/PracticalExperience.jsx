import React, {useState} from "react";
import { Form } from "./GlobalStyled";


const PracticalExperience = () => {
const [companyName, setCompanyName] = useState('')
const [inputPosition, setInputPosition] = useState('')
const [mainTasks, setMainTasks] = useState('')
const [inputFrom, setInputFrom] = useState('')
const [inputUntil, setInputUntil] = useState('')
const [inputButton, setInputButton] = useState({});


const handleCompany = (e) => {
  setCompanyName(e.target.value)
}
const handlePosition = (e) => {
  setInputPosition(e.target.value)
}
const handleMainTasks = (e) => {
  setMainTasks(e.target.value)
}
const handleFrom = (e) => {
  setInputFrom(e.target.value)
}
const handleUntil = (e) => {
  setInputUntil(e.target.value)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputButton({
      company: companyName,
      position: inputPosition,
      mainTask: mainTasks,
      dateOfJob: `${inputFrom} - ${inputUntil}`
    });
  };


  return (
    <div>
      {/*nome da empresa, cargo, principais tarefas de seus trabalhos, data de e até quando você trabalhou para essa empresa/ company name, position title, main tasks of your jobs, date from and until when you worked for that company) */}
      <h1>PracticalExperience</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <input
          type="text"
          placeholder="Company"
          required
          onChange={(e) => handleCompany(e)}
        />
      <input
          type="text"
          placeholder="Position"
          required
          onChange={(e) => handlePosition(e)}
        />
      <input
          type="text"
          placeholder="Your main tasks"
          required
          onChange={(e) => handleMainTasks(e)}
        />
      <input
          type="number"
          placeholder="From ex: 2021"
          required
          onChange={(e) => handleFrom(e)}
        />
      <input
          type="number"
          placeholder="To ex: 2022"
          required
          onChange={(e) => handleUntil(e)}
        />

        <button type="submit">Add</button>
      </Form>
      <p>{inputButton.company}</p>
      <p>{inputButton.position}</p>
      <p>{inputButton.mainTask}</p>
      <p>{inputButton.dateOfJob}</p>
      <button>Delete</button>
    </div>
  );
};

export default PracticalExperience;
