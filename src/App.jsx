import "./App.css";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

const App = () => {
  return (
    <div className="App">
      <h1>Teste aqui</h1>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
};

export default App;
