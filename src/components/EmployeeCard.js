import React, { useState } from "react";
import useEmployeeStore from "./EmployeeStore";

const EmployeeCard = () => {
  const { employees, setEmployees } = useEmployeeStore();
  const [editedEmployee, setEditedEmployee] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEditClick = (index) => {
    setEditedEmployee(index);
  };

  const handleUpdateClick = (index) => {
    if (index !== null) {
      const updatedEmployees = [...employees];
      const editedEmployee = updatedEmployees[index];

      if (
        parseFloat(editedEmployee.salary) < 0 ||
        parseInt(editedEmployee.age, 10) < 0
      ) {
        alert("Salary and age cannot be negative!");
        return;
      }

      updatedEmployees[index] = { ...updatedEmployees[index], ...formData };
      setEmployees(updatedEmployees);

      setEditedEmployee(null);
      setFormData({});
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="w-full">
      <div className="max-w-5xl my-20 mx-auto">
        <h2 className="text-xl text-center my-5">Edit Employee</h2>
        <div className="relative overflow-x-auto">
          <form>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className={`px-6 py-4 font-medium whitespace-nowrap dark:text-white ${
                        index === editedEmployee ? "text-blue-600" : ""
                      }`}
                    >
                      {index === editedEmployee ? (
                        <input
                          type="text"
                          name="name"
                          value={formData.name || employee.name}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      ) : (
                        employee.name
                      )}
                    </th>
                    <td
                      className={`px-6 py-4 ${
                        index === editedEmployee ? "text-blue-600" : ""
                      }`}
                    >
                      {index === editedEmployee ? (
                        <input
                          type="number"
                          name="salary"
                          value={formData.salary || employee.salary}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      ) : (
                        employee.salary
                      )}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        index === editedEmployee ? "text-blue-600" : ""
                      }`}
                    >
                      {index === editedEmployee ? (
                        <input
                          type="number"
                          name="age"
                          value={formData.age || employee.age}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      ) : (
                        employee.age
                      )}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        index === editedEmployee ? "text-blue-600" : ""
                      }`}
                    >
                      {index === editedEmployee ? (
                        <input
                          type="text"
                          name="img"
                          value={formData.img || employee.img}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                      ) : (
                        employee.img
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {index === editedEmployee ? (
                        <button
                          type="button"
                          className="w-full bg-blue-600 text-white hover-bg-slate-800 rounded"
                          onClick={() => handleUpdateClick(index)}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full bg-blue-600 text-white hover-bg-slate-800 rounded"
                          onClick={() => handleEditClick(index)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
