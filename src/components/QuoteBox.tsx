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
  padding: 0.5em;
  min-width: 7vw;
  min-height: 5vh;
  margin: 2%;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #cc2b5e;
    color: white;
    transition: 0.2s;
  }
`;

const TweetButton = styled.a`
  border: 2px solid #cc2b5e;
  border-radius: 5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 7vw;
  min-height: 4.3vh;
  margin: 2%;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
  color: black;
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
    <Box id="quote-box">
      <h1 id="text">{quote.quote}</h1>
      <Flex>
        <legend id="author">{quote.author}</legend>
        <Flex>
          <Button onClick={() => setCount(count + 1)} id="new-quote">
            New Quote
          </Button>
          <TweetButton href="https://twitter.com/intent/tweet" id="tweet-quote">
            Tweet!
          </TweetButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuoteBox;
