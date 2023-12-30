import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.scss";
type Props = {};

const NavbarAdmin = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="name">
          <Link to={"/admin"}>
            <h1>Dashboard</h1>
          </Link>
        </div>
        <div className="addUser">
          <Link to={"/admin/addUser"}>
            <h3>AddUser</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
