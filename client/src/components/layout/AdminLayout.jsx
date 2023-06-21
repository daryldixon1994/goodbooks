import React from "react";
import { Outlet } from "react-router";
import AdminNavBar from "../Navbar/AdminNavBar";
import Aside from "../admin/Aside";
import AdminRoute from "../routes/AdminRoute";
function AdminLayout() {
  return (
    <div className="min-w-full min-h-[694px]">
      <AdminNavBar />
      <div className="box-border min-h-[600px] flex ">
        <Aside />
        <AdminRoute>
          <Outlet />
        </AdminRoute>
      </div>
    </div>
  );
}

export default AdminLayout;
