import React from "react";
import { useEffect, useState } from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

// TABLE
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

import "./dashboard.css";

const Dashboard = () => {
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

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % donors.length;

    setItemOffset(newOffset);
  };

  //GET DONORS DATA

  React.useEffect(() => {
    fetchDonors();
  }, []);
  const fetchDonors = async () => {
    const response = await fetch("http://localhost:8060/all_donor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    setDonors(data);
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#f52f2f">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h6
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit", marginRight: "10px" }}
          >
            Blood Chain Pakistan
          </h6>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/admin">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            {/* 
            <NavLink exact to="/tables" >
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/profile" >
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/analytics" >
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink> */}

            <NavLink to="/hero404" target="_blank">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Sign out
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

      <div className="adminTable">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Blood Group</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          {/* <DonorsList donors={donors} /> */}

          {currentItems.map((donor, index) => {
            return (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{donor.firstName}</td>
                  <td>{donor.lastName}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.address}</td>
                  <td>{donor.city}</td>
                  <td>{donor.phoneNumber}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>

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

export default Dashboard;
