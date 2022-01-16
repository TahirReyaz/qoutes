import { Routes, Route, Navigate } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import NewQoute from "./pages/NewQoute";
import QouteDetails from "./pages/QouteDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Navigate to="/qoutes" />} />
        <Route path="/qoutes" exact element={<AllQoutes />} />
        <Route path="/qoutes/:qouteId" element={<QouteDetails />} />
        <Route path="/new-qoute" element={<NewQoute />} />
      </Routes>
    </div>
  );
}

export default App;
