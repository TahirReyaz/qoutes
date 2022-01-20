import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";

const AllQoutes = React.lazy(() => import("./pages/AllQoutes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QouteDetails = React.lazy(() => import("./pages/QouteDetails"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQoutes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QouteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
