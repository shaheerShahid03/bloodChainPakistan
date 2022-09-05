import "./App.css";
import DonateNow from "./PAGEs/DONATE_NOW/DonateNow";
import Home from "./PAGEs/HOME/Home";
import MenuBar from "./COMPONENTs/MENU/MenuBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./PAGEs/FOOTER/Footer";

function App() {
  return (
    <>
      <MenuBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/donation" element={<DonateNow />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
