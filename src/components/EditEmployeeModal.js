import React, { useState } from "react";
import useEmployeeStore from "./EmployeeStore";

const EditEmployeeModal = ({ employee, onSave, onClose }) => {
  const updateEmployee = useEmployeeStore((state) => state.updateEmployee);

  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSaveClick = () => {
    if (parseFloat(editedEmployee.salary) < 0 || parseInt(editedEmployee.age, 10) < 0) {
      alert('Salary and age cannot be negative!');
    } else {
      updateEmployee(editedEmployee.id, editedEmployee);
      onSave(editedEmployee);
      onClose();
    }
  };

  const handleCancelClick = () => {
    onClose();
  };


  return (
    <div className="bg-black w-full h-full flex justify-center items-center fixed top-0 bg-opacity-80">
      <div className="bg-white p-5 w-5xl">
        <div className="w-full">
          <h2>Edit</h2>
          <div className="max-w-5xl my-10 mx-auto">
            <form className="max-w-xl my-0 mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
                value={editedEmployee.name || ''}
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="salary"
                placeholder="Salary"
                className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
                value={editedEmployee.salary || 0}
                onChange={handleInputChange}
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
                value={editedEmployee.age || 0}
                onChange={handleInputChange}
              />

              <button
                type="button"
                onClick={handleSaveClick}
                className="w-full bg-black text-white p-2 hover-bg-slate-800 rounded mb-5"
              >
                Save
              </button>
            </form>
          </div>

          <button onClick={handleCancelClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
