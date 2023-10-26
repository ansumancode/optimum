import React from "react";
import Header from "@/components/Header";
import EmployeeList from "@/components/EmployeeList";
import EditEmployeeModal from "@/components/EditEmployeeModal";
import useEmployeeStore from "@/components/EmployeeStore";

const EmployeeListPage = () => {
  const { employees, setEmployees } = useEmployeeStore();
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setModalOpen(false);
  };

  const handleSaveEmployee = (editedEmployee) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === editedEmployee.id) {
        return editedEmployee;
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
    handleCloseModal();
  };

  const handleRemoveEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <>
      <Header />
      <EmployeeList employees={employees} onEdit={handleOpenModal} onRemove={handleRemoveEmployee} />
      {isModalOpen && (
        <EditEmployeeModal employee={selectedEmployee} onSave={handleSaveEmployee} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default EmployeeListPage;
