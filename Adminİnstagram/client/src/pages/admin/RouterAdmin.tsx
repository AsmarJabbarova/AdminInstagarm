import React from "react";
import NavbarAdmin from "./NavbarAdmin/NavbarAdmin";
import { Outlet } from "react-router-dom";

type Props = {};

const RouterAdmin = (props: Props) => {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
    </div>
  );
};

export default RouterAdmin;
