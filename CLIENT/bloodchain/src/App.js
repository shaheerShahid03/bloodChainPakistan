import "./App.css";
import RegisterDonor from "./PAGEs/REGISTER_DONOR/RegisterDonor";
import Home from "./PAGEs/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ADMIN/DASHBOARD/Dashboard";
import BleedDonors from "./PAGEs/DONATIONS/BleedDonors";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/registration" element={<RegisterDonor />} />
          <Route path="/donations" element={<BleedDonors />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
