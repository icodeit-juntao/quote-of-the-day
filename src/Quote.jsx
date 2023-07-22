import React from "react";

const Quote = ({ quote }) => {
  return (
    <div data-testid="quote-container" className="quote">
      <p className="content">{quote && quote.content}</p>
      <p>
        <span className="author">&mdash; {quote && quote.author}</span>
      </p>
    </div>
  );
};

export { Quote };
