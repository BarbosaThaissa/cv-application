import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormsCV from "./components/FormsCV";

import { GlobalStyled, Container } from "./components/GlobalStyled";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Container>
        <FormsCV />
      </Container>
      <Footer />
    </>
  );
};

export default App;
