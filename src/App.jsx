import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormsCV from "./components/FormsCV";
//theme
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import { GlobalStyled, Container } from "./components/GlobalStyled";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = (e) => {
    e.preventDefault();
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log('pegou');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <GlobalStyled />
      <Header theme={theme} toggleTheme={themeToggler} />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Container>
          <FormsCV />
        </Container>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default App;
