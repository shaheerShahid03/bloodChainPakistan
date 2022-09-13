import "./App.css";
import RegisterDonors from "./ADMIN/DASHBOARD/RegisteredDonors";
import Home from "./PAGEs/HOME/Home";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./ADMIN/DASHBOARD/DashBoard";
import Emergency from "./ADMIN/DASHBOARD/Emergency";
import RegisterDonor from "./PAGEs/REGISTER_DONOR/RegisterDonor";
import EmergencyCase from "./PAGEs/Emergency/EmergencyCase";
import Solved from "./ADMIN/DASHBOARD/Solved";
import ReadyToDonate from "./ADMIN/DASHBOARD/ReadyToDonate";
import SignIn from "./PAGEs/SIGNIN/SignIn";
import DonorsList from "./PAGEs/DONORS_LIST/DonorsList";
import ProtectedRoutes from "./COMPONENTs/PROTEXTED_ROUTES/index";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/registration" element={<RegisterDonor />} />
          <Route path="/emergency_case" element={<EmergencyCase />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/donorslist"
            element={
              <ProtectedRoutes>
                <DonorsList />
              </ProtectedRoutes>
            }
          />

          <Route path="/admin" element={<DashBoard />} />
          <Route path="/registered" element={<RegisterDonors />} />
          <Route path="/ready_to_donate" element={<ReadyToDonate />} />
          <Route path="/solved" element={<Solved />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
