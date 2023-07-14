import React from "react";
import { Routes, Route } from 'react-router-dom';
import EmployeeForm from '../employee/EmployeeForm';
import EmployeeList from '../employee/EmployeeList';
import EmployeeDropdown from "../employee/EmployeeDropdown";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeForm />} />
      <Route path="/emp/list" element={<EmployeeList />} />
      <Route path="/edit-emp/:id" element={<EmployeeForm />} />
      <Route path="/emp/drop/:id" element={<EmployeeDropdown />} />
    </Routes>
  );
}

export default PublicRoutes;
