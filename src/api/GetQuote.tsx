const GetQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const json = await response.json();
  const author = await json.author;
  const content = await json.content;
  return { quote: content, author: author };
};

export default GetQuote;
