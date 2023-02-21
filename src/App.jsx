import EducationalExperience from "./components/EducationalExperience";
import Footer from "./components/Footer";
import GeneralInformation from "./components/GeneralInformation";
import Header from "./components/Header";
import PracticalExperience from "./components/PracticalExperience";

import { GlobalStyled, Container } from "./components/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Container>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </Container>
      <Footer />
    </>
  );
};

export default App;
