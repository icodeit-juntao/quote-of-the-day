import React, { useState } from "react";
import { useFetchQuotes } from "./useFetchQuotes";
import { Quote } from "./Quote";

const App = () => {
  const [index, setIndex] = useState(0);
  const { loading, quotes } = useFetchQuotes();

  const clickHandler = () => {
    setIndex((index) => (index + 1) % 3);
  };

  return (
    <div>
      <h1>Quote of the day</h1>
      {loading && <div>loading...</div>}
      {!loading && <Quote quote={quotes[index]} />}
      <button onClick={clickHandler}>next</button>
    </div>
  );
};

export default App;
