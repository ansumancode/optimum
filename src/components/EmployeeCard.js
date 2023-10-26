import React from 'react';
import useEmployeeStore from './EmployeeStore';

const EmployeeCard = () => {
  const { employees, setEmployees } = useEmployeeStore();

  const handleEditClick = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].editable = true;
    setEmployees(updatedEmployees);
  };

  const handleUpdateClick = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].editable = false;
    setEmployees(updatedEmployees);
  };

  return (
    <div className="w-full">
      <div className="max-w-5xl my-20 mx-auto">
        <h2 className="text-xl text-center my-5">Edit Employee</h2>
        <div className="relative overflow-x-auto">
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
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className={`px-6 py-4 font-medium whitespace-nowrap dark:text-white ${
                      employee.editable ? 'text-blue-600' : ''
                    }`}
                  >
                    {employee.editable ? (
                      <input
                        type="text"
                        value={employee.name}
                        onChange={(e) => {
                          const updatedEmployees = [...employees];
                          updatedEmployees[index].name = e.target.value;
                          setEmployees(updatedEmployees);
                        }}
                      />
                    ) : (
                      employee.name
                    )}
                  </th>
                  <td className={`px-6 py-4 ${employee.editable ? 'text-blue-600' : ''}`}>
                    {employee.editable ? (
                      <input
                        type="number"
                        value={employee.salary}
                        onChange={(e) => {
                          const updatedEmployees = [...employees];
                          updatedEmployees[index].salary = e.target.value;
                          setEmployees(updatedEmployees);
                        }}
                      />
                    ) : (
                      employee.salary
                    )}
                  </td>
                  <td className={`px-6 py-4 ${employee.editable ? 'text-blue-600' : ''}`}>
                    {employee.editable ? (
                      <input
                        type="number"
                        value={employee.age}
                        onChange={(e) => {
                          const updatedEmployees = [...employees];
                          updatedEmployees[index].age = e.target.value;
                          setEmployees(updatedEmployees);
                        }}
                      />
                    ) : (
                      employee.age
                    )}
                  </td>
                  <td className={`px-6 py-4 ${employee.editable ? 'text-blue-600' : ''}`}>
                    {employee.editable ? (
                      <input
                        type="text"
                        value={employee.img}
                        onChange={(e) => {
                          const updatedEmployees = [...employees];
                          updatedEmployees[index].img = e.target.value;
                          setEmployees(updatedEmployees);
                        }}
                      />
                    ) : (
                      employee.img
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {employee.editable ? (
                      <button
                        className="w-full bg-red-600 text-white hover:bg-slate-800 rounded"
                        onClick={() => handleUpdateClick(index)}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="w-full bg-blue-600 text-white hover:bg-slate-800 rounded"
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
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
