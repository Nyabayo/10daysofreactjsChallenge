import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold">🌟 Daily Motivation 🌟</h2>
      <p className="mt-2 text-gray-700 italic">"{quote}"</p>
      <p className="mt-2 font-bold">- {author}</p>
    </div>
  );
};

export default Quote;
