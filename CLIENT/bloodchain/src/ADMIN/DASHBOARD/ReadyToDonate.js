import React from "react";
import SideMenu from "../COMPONENTs/SideMenu";
import { useEffect, useState } from "react";

// TABLE
import Tablee from "../COMPONENTs/Tablee";
import ReactPaginate from "react-paginate";

const ReadyToDonate = () => {
  const [donors, setDonors] = React.useState([]);
  const buttonToggle = true;
  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(donors.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(donors.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, donors]);

  //useEFFECT DONORS DATA

  React.useEffect(() => {
    getDonors();
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % donors.length;

    setItemOffset(newOffset);
  };

  // FETCH DONORS DATA

  const getDonors = async () => {
    try {
      const response = await fetch("http://localhost:8060/readytobleedall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const readyDonors = data.filter(
        (item) => item.status === "Ready For Donation"
      );

      setDonors(readyDonors);
    } catch (error) {
      alert(error);
    }
  };
  const deleteDonor = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8060/delreadydonor/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 201) {
        alert("Donor Deleted");
        getDonors();
      }
    } catch (error) {
      alert(error);
    }
  };
  const bleededBtn = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8060/addsolvedcase/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("status updated");
        getDonors();
      }
    } catch (error) {
      alert(error + " error");
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SideMenu />
      <div className="adminTable">
        <h1>Ready To Donate</h1>
        <Tablee
          registeredDonors={currentItems}
          deleteDonor={deleteDonor}
          btn={buttonToggle}
          bleededBtn={bleededBtn}
        />
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

export default ReadyToDonate;
