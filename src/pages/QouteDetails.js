import { Fragment, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QouteDetails = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route exact path={match.url}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QouteDetails;
