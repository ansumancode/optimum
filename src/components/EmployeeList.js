import React from "react";
import useSWR from "swr";
import useEmployeeStore from "./EmployeeStore";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

const EmployeeList = ({ onEdit, onRemove }) => {
  const { employees } = useEmployeeStore();

  const { data: cachedData } = useSWR(
    "https://dummy.restapiexample.com/api/v1/employees",
    fetcher
  );

  return (
    <div className="w-full">
      <div className="max-w-5xl my-20 mx-auto">
        <h2 className="text-xl text-center my-5">Employee List</h2>

        <ul className="grid md:grid-cols-4 gap-4 grid-cols-1">
          {employees.map((employee, id) => (
            <li className="border border-gray-200 p-2 rounded" key={employee.id}>
              <div className="w-full">
                <Image src="/avatar.png" width={500} height={400} className="w-full" alt="Avatar" />
              </div>
              <p className="text-center">{employee.name}</p>
              <p className="text-center">Salary: {employee.salary}</p>
              <p className="text-center">Age: {employee.age}</p>

              <div className="flex justify-around mt-5">
                <button
            className="bg-green-400 px-5 rounded text-white cursor-pointer"
            onClick={() => onEdit(employee, id)}
          >
            Edit
          </button>
          <button
            className="bg-red-400 px-5 rounded text-white cursor-pointer"
            onClick={() => onRemove(employee.id)}
          >
            Remove
          </button>
              </div>
            </li>
          ))}

          {cachedData &&
            cachedData.data.map((employee, index) => (
              <li className="border border-gray-200 p-2 rounded" key={index}>
                <div className="w-full">
                  <Image src="/avatar.png" width={500} height={400} className="w-full" alt="Avatar" />
                </div>
                <p className="text-center">{employee.employee_name}</p>
                <p className="text-center">
                  Salary: {employee.employee_salary}
                </p>
                <p className="text-center">Age: {employee.employee_age}</p>

                <div className="flex justify-around mt-5">
                  <button
                    className="bg-green-100 px-5 rounded text-white  cursor-not-allowed"
                    disabled
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-100 px-5 rounded text-white cursor-not-allowed"
                    disabled
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
