import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DailogBox from "../../ADMIN/COMPONENTs/DailogBox";

const BloodReq = () => {
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [matchDonors, setMatchDonors] = React.useState([]);
  const [allDonors, setAllDonors] = React.useState([]);

  const [showDailogBox, setShowDailogBox] = React.useState(false);

  React.useEffect(() => {
    getDonors();
  }, [matchDonors]);

  const getDonors = async () => {
    try {
      const response = await fetch("http://localhost:8060/readytobleedall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setAllDonors(data);
    } catch (error) {
      alert(error);
    }
  };

  // console.log(allDonors);
  // console.log(city + " " + bloodGroup);

  const checkDonor = async (e) => {
    e.preventDefault();
    try {
      const match = allDonors.filter(
        (value) =>
          value.status === "Ready For Donation" &&
          value.city === city &&
          value.bloodGroup === bloodGroup
      );

      setShowDailogBox(true);
      setMatchDonors(match);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="listMain">
      <div className="d-flex con justify-content-center">
        <div className="main-wrapper asd">
          <div className=" text-center  ">
            <h3 className="mt-1"> Case Details</h3>
          </div>

          <Form onSubmit={checkDonor}>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Required Blood Group</Form.Label>
                <Form.Select
                  required={true}
                  value={bloodGroup}
                  placeholder="Enter you Blood Group"
                  onChange={(e) => {
                    setBloodGroup(e.target.value);
                  }}
                >
                  <option></option>
                  <option>A+</option>

                  <option>A-</option>

                  <option>B+</option>
                  <option>B-</option>

                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required={true}
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value.toLowerCase());
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Attendant Number</Form.Label>
                <Form.Control
                  required={true}
                  value={phoneNumber}
                  type="Phone"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {showDailogBox && (
            <DailogBox
              setMatchDonors={setMatchDonors}
              matched={matchDonors}
              show={showDailogBox}
              setShow={setShowDailogBox}
              patientPhoneNUm={phoneNumber}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodReq;
