import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPaginate from "react-paginate";
import Tablee from "../COMPONENTs/Tablee";

function DailogBox({ patientDetails, show, setShow, matched, setMatchDonors }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const bleed = true;

  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(matched.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(matched.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, matched]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % matched.length;

    setItemOffset(newOffset);
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
        // alert("status updated");

        setShow(false);
      }
    } catch (error) {
      alert(error + " error");
    }
  };

  return (
    <>
      <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
        Full screen
        {/* {typeof v === "string" && `below ${v.split("-")[0]}`} */}
      </Button>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => {
          setShow(false);
          setMatchDonors("");
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>
            Matched Donors
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Tablee
            registeredDonors={currentItems}
            bleed={bleed}
            bleededBtn={bleededBtn}
            patientDetails={patientDetails}
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DailogBox;
