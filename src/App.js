import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQoutes from "./pages/AllQoutes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QouteDetails from "./pages/QouteDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to="/quotes" />} />
        <Route path="/quotes" exact element={<AllQoutes />} />
        <Route path="/quotes/:quoteId" element={<QouteDetails />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
