import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./donate_now.css";

const DonateNow = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName, lastName, bloodGroup, address, city, phoneNumber);

    const response = await fetch("http://localhost:8060/add_donor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        bloodGroup,
        address,
        city,
        phoneNumber,
      }),
    });

    const data = await response.status;
    console.log(firstName, lastName, bloodGroup, address, city, phoneNumber);
    if (data === 210) {
      setFirstName("");
      setLastName("");
      setBloodGroup("");
      setAddress("");
      setCity("");
      setPhoneNumber("");
    }
    // console.log(data);
  };
  return (
    <>
      <div>
        <article
          className="article"
          style={{ backgroundImage: `url(${"slide3.jpg"})` }}
        >
          <h1 className="header">Blood Donation</h1>
          <p className="header">
            Home / <span className="red">donate now</span>
          </p>
        </article>
      </div>

      <div className="heading">
        <h2 className="">Make a Donation</h2>
      </div>

      <div className="donation_form">
        <Form onClick={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Your Blood Donation</Form.Label>
              <Form.Select
                required={true}
                value={bloodGroup}
                placeholder="Enter you Blood Group"
                defaultValue="Choose..."
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                }}
              >
                <option></option>
                <option>A+</option>

                <option>A+</option>
                <option>A-</option>

                <option>B+</option>
                <option>B-</option>

                <option>O+</option>
                <option>O-</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} required={true}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required={true}
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required={true}
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control
              required={true}
              value={address}
              placeholder="Apartment, studio, or floor"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                required={true}
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrid">
              <Form.Label>Phone Number</Form.Label>
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

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default DonateNow;
