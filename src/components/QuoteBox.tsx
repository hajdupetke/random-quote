import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import GetQuote from "../api/GetQuote";

type Quote = {
  quote: string;
  author: string;
};

const Box = styled.div`
  background-color: white;
  font-family: Helvetica;
  box-shadow: 8px 8px black;
  max-width: 40vw;
  padding: 2%;
`;

const Button = styled.button`
  border: 2px solid #cc2b5e;
  border-radius: 5%;
  padding: 2%;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #cc2b5e;
    color: white;
    transition: 0.2s;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuoteBox: FunctionComponent<{ initial?: Quote }> = ({
  initial = { quote: "", author: "" },
}) => {
  const [quote, setQuote] = useState(initial);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const temp = await GetQuote();
      await setQuote(temp);
    })();
  }, [count]);

  return (
    <Box>
      <h1>{quote.quote}</h1>
      <Flex>
        <legend>{quote.author}</legend>
        <Button onClick={() => setCount(count + 1)}>New Quote</Button>
      </Flex>
    </Box>
  );
};

export default QuoteBox;
