import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQoutes from "./pages/AllQoutes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QouteDetails from "./pages/QouteDetails";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
