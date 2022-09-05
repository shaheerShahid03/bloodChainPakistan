import "./App.css";
import DonateNow from "./PAGEs/DONATE_NOW/DonateNow";
import Home from "./PAGEs/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ADMIN/DASHBOARD/Dashboard";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/donation" element={<DonateNow />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
