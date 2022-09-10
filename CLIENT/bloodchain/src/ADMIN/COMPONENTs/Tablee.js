import React from "react";
import Table from "react-bootstrap/Table";

const Tablee = ({
  registeredDonors,
  deleteDonor,
  btn,
  bleed,
  emergency,
  checkDonor,
  bleededBtn,
  patientDetails,
}) => {
  console.log(patientDetails);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            {emergency === true ? (
              <>
                <th>Patients First Name</th>
                <th>Patients Last Nam</th>
              </>
            ) : (
              <>
                <th>First Name</th>
                <th>Last Name</th>
              </>
            )}

            <th>Blood Group</th>
            {emergency === true ? <th>Hospital Address</th> : <th>Address</th>}
            <th>City</th>
            <th>Phone Number</th>
            {!emergency && !bleed && <th>Last Donate Date</th>}
            {bleed && <th> Patient Phone Number</th>}
            <th></th>
          </tr>
        </thead>
        {/* <DonorsList donors={donors} /> */}

        {registeredDonors.map((donor, index) => {
          return (
            <tbody key={index}>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{donor.firstName}</td>
                <td>{donor.lastName}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.address}</td>
                <td>{donor.city}</td>
                <td>{donor.phoneNumber}</td>
                {!emergency && !bleed && <td>{donor.date}</td>}
                {bleed && <td>{patientDetails.phoneNumber}</td>}
                <td>
                  {!bleed && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteDonor(donor._id)}
                    >
                      DELETE
                    </button>
                  )}
                  {emergency && (
                    <button
                      type="button"
                      className="btn btn-success mx-2"
                      onClick={() => checkDonor(donor._id)}
                    >
                      Check Donor
                    </button>
                  )}
                  {btn || bleed ? (
                    <button
                      type="button"
                      className="btn btn-success mx-2"
                      onClick={() => bleededBtn(donor._id)}
                    >
                      BLEED
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
};

export default Tablee;
