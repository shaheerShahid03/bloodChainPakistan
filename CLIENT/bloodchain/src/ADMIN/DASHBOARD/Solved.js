import React from "react";
import SideMenu from "../COMPONENTs/SideMenu";
import ReactPaginate from "react-paginate";
import Tablee from "../COMPONENTs/Tablee";
import { useEffect, useState } from "react";
import "./dashboard.css";

const Solved = () => {
  const [donors, setDonors] = React.useState([]);

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
      const response = await fetch("http://localhost:8060/getallsolvedcases", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      const solvedCases = data.filter((item) => item.status === "Solved");

      setDonors(solvedCases);
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

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SideMenu />
      <div className="adminTable">
        <h1 className="title red">Solved Cases</h1>

        <Tablee registeredDonors={currentItems} deleteDonor={deleteDonor} />

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

export default Solved;
