import React from "react";
import { useEffect, useState } from "react";
import SideMenu from "../COMPONENTs/SideMenu";
import "./dashboard.css";

// TABLE
import ReactPaginate from "react-paginate";
import Tablee from "../COMPONENTs/Tablee";
import DailogBox from "../COMPONENTs/DailogBox";

import "./dashboard.css";

const Emergency = () => {
  const [donors, setDonors] = React.useState([]);
  const [matchDonors, setMatchDonors] = React.useState([]);
  const [allDonors, setAllDonors] = React.useState([]);

  const [showDailogBox, setShowDailogBox] = useState(false);

  const emergency = true;
  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [patientDetails, setPatientDetails] = useState([]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(donors.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(donors.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, donors]);

  //useEFFECT DONORS DATA

  React.useEffect(() => {
    getDonors();
  }, [matchDonors]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % donors.length;

    setItemOffset(newOffset);
  };

  // FETCH DONORS DATA

  const getDonors = async () => {
    try {
      const response = await fetch(
        "http://localhost:8060/get_emergency_cases",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setAllDonors(data);
      const patients = data.filter((item) => item.status === "emergency");
      setDonors(patients);
    } catch (error) {
      alert(error);
    }
  };

  const deleteDonor = async (id) => {
    try {
      const response = await fetch(`http://localhost:8060/delete/${id}`, {
        method: "DELETE",
      });

      if (response.status === 201) {
        alert("Donor Deleted");
        getDonors();
      }
    } catch (error) {
      alert(error);
    }
  };

  const checkDonor = async (id) => {
    try {
      const response = await fetch(`http://localhost:8060/check/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setPatientDetails(data);

      const match = allDonors.filter(
        (value) =>
          value.status === "Ready For Donation" &&
          value.city === data.city &&
          value.bloodGroup === data.bloodGroup
      );

      setShowDailogBox(true);
      setMatchDonors(match);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SideMenu />

      <div className="adminTable">
        <h1 className="title red">Emergency</h1>

        <Tablee
          registeredDonors={currentItems}
          deleteDonor={deleteDonor}
          emergency={emergency}
          checkDonor={checkDonor}
        />
        {showDailogBox && (
          <DailogBox
            setMatchDonors={setMatchDonors}
            matched={matchDonors}
            show={showDailogBox}
            setShow={setShowDailogBox}
            patientDetails={patientDetails}
            checkDonor={checkDonor}
          />
        )}

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default Emergency;
