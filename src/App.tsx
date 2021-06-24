import React from "react";
import QuoteBox from "./components/QuoteBox";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: linear-gradient(270deg, #cc2b5e, #753a88);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
`;

const App = () => {
  return (
    <Background className="App">
      <QuoteBox />
    </Background>
  );
};

export default App;
