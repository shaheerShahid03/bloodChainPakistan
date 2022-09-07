import React from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <>
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

            <NavLink to="/registered">
              <CDBSidebarMenuItem icon="columns">
                Registered Donor
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/ready_to_donate">
              <CDBSidebarMenuItem icon="columns">
                Ready To Donate
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/solved">
              <CDBSidebarMenuItem icon="columns">
                Solved Cases
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/emergency">
              <CDBSidebarMenuItem icon="columns">Emergency</CDBSidebarMenuItem>
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
    </>
  );
};

export default SideMenu;
