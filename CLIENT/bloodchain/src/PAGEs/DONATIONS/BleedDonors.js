import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Footer from "../../COMPONENTs/FOOTER/Footer";
import MenuBar from "../../COMPONENTs/MENU/MenuBar";
import "./bleedDonors.css";

const BleedDonors = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [date, setDate] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      firstName,
      lastName,
      bloodGroup,
      address,
      city,
      phoneNumber,
      date
    );

    try {
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
          date,
        }),
      });

      const data = await response.json();
      if (response.status === 201) {
        setFirstName("");
        setLastName("");
        setBloodGroup("");
        setAddress("");
        setCity("");
        setPhoneNumber("");
        setDate(null);
        return;
      }
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MenuBar />

      <div>
        <article
          className="article"
          style={{ backgroundImage: `url(${"slide3.jpg"})` }}
        >
          <h1 className="header">Blood Donation</h1>
          <p className="header">
            Home / <span className="red">Donation</span>
          </p>
        </article>
      </div>

      <div className="heading">
        <h2 className="">Ready for Donation</h2>
      </div>

      <div className="donation_form">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Your Blood Type</Form.Label>
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
      <Footer />
    </>
  );
};

export default BleedDonors;