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
    <>
      {loading && <div>loading...</div>}
      {!loading && <Quote quote={quotes[index]} />}
      <button onClick={clickHandler}>next</button>
    </>
  );
};

export default App;
