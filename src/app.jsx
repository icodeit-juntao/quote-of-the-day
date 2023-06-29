import React, { useState } from "react";

const quotes = [
  {
    content:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    content: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    content:
      "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);

  const clickHandler = () => {
    setIndex((index) => (index + 1) % 3);
  };

  return (
    <>
      <div>
        <p className="content">{quotes[index].content}</p>
        <p>
          <span className="author">&mdash; {quotes[index].author}</span>
        </p>
      </div>
      <button onClick={clickHandler}>next</button>
    </>
  );
};

export default App;
