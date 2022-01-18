import React, { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const AllQoutes = () => {
  return (
    <Fragment>
      <h1>All qoutes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQoutes;
