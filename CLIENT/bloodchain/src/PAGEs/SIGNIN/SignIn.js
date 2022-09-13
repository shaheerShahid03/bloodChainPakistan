import React from "react";
import MenuBar from "../../COMPONENTs/MENU/MenuBar";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useHandle } from "../../API/Api";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const userAuthChange = useHandle();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "admin" && password !== "admin") {
      setShow(true);
      return;
    }
    userAuthChange(true);
    navigate("/donorslist");
  };

  return (
    <>
      <MenuBar />
      <div className="d-flex con justify-content-center">
        <div className="main-wrapper asd">
          <div className=" text-center  ">
            <h3 className="mt-1">Sign In</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>User Name</label>
            </div>
            <div className="form-floating ">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label>Password</label>
              {show && <labe className="text-danger label">UNAUTHORIZED</labe>}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <p className="text-center mt-4">&#169;2017-2018</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
