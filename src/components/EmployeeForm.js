import React, { useState } from 'react';
import useEmployeeStore from './EmployeeStore';

const EmployeeForm = () => {
  const { setEmployees, errorMessage } = useEmployeeStore();

  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    age: '',
    img: '',
  }); 

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.salary) {
      errors.salary = 'Salary is required';
    }
    if (!formData.age) {
      errors.age = 'Age is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const currentEmployees = useEmployeeStore.getState().employees;
      setEmployees([...currentEmployees, formData]);

      setSuccessMessage('Employee data submitted successfully');
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-5xl my-20 mx-auto">
        <form className="max-w-xl my-0 mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="text-red-500">{formErrors.name}</div>}

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
            value={formData.salary}
            onChange={handleInputChange}
          />
          {formErrors.salary && <div className="text-red-500">{formErrors.salary}</div>}

          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
            value={formData.age}
            onChange={handleInputChange}
          />
          {formErrors.age && <div className="text-red-500">{formErrors.age}</div>}

          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            placeholder="Image"
            className="w-full border-sky-100 border-2 p-2 rounded outline-none mb-5"
            value={formData.img}
            onChange={handleInputChange}
          />
        {errorMessage? errorMessage && <div className="text-red-500">{errorMessage}</div>: " "}
          <button type="submit" className="w-full bg-black text-white p-2 hover:bg-slate-800 rounded mb-5">
            Submit
          </button>

          {errorMessage? "" : successMessage && <div className="text-green-500">{successMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
