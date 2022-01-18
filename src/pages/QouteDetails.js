import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QouteDetails = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <h1>All detials qoutes {quoteId}</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path={`comments`} element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QouteDetails;
