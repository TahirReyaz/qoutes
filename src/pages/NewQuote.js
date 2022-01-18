import { Fragment } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const history = useNavigate();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history("/quotes");
  };
  return (
    <Fragment>
      <h1>new qoutes</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuote;
