import { useEffect, useState } from "react";

const useFetchQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = () => {
    setLoading(true);
    fetch("https://api.quotable.io/quotes/random?limit=3")
      .then((r) => r.json())
      .then((data) => {
        setLoading(false);
        setQuotes(data);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { quotes, loading };
};

export { useFetchQuotes };
