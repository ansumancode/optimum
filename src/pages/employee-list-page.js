import React, { useState } from "react";
import Header from "@/components/Header";
import EmployeeList from "@/components/EmployeeList";
import EditEmployeeModal from "@/components/EditEmployeeModal";
import useEmployeeStore from "@/components/EmployeeStore";

const EmployeeListPage = () => {
  const { employees, updateEmployee, removeEmployee } = useEmployeeStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenModal = (employee) => {
    setSelectedEmployee({ ...employee});
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setModalOpen(false);
  };

 

  const handleSaveEmployee = (editedEmployee) => {
    if (editedEmployee) {
      updateEmployee(selectedEmployee.id, editedEmployee);
      handleCloseModal();
    } else {
      alert('Invalid employee data. Please make sure all fields are filled.');
    }
  };

  
  return (
    <>
      <Header />
      <EmployeeList employees={employees} onEdit={handleOpenModal} onRemove={removeEmployee} />
      {isModalOpen && (
        <EditEmployeeModal employee={selectedEmployee} onSave={handleSaveEmployee} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EmployeeListPage;
