import { create } from 'zustand';

// Define a variable to keep track of the next available ID
let nextId = 0;

const useEmployeeStore = create((set) => ({
  employees: [],
  errorMessage: '',

  setEmployees: (newEmployees) => {
    if (Array.isArray(newEmployees)) {
      const hasNegativeValues = newEmployees.some((employee) => {
        return (
          parseFloat(employee.salary) < 0 || parseInt(employee.age, 10) < 0
        );
      });

      if (!hasNegativeValues) {
        // Add IDs to new employees and update the employees array
        const employeesWithIds = newEmployees.map((employee) => ({
          ...employee,
          id: nextId++
        }));
        set({ employees: employeesWithIds, errorMessage: '' });
      } else {
        set({ errorMessage: 'Employee data contains negative values' });
      }
    } else {
      set({ errorMessage: 'Invalid data format for employees' });
    }
  },

  updateEmployee: (id, updatedEmployee) => {
    set((state) => ({
      employees: state.employees.map((employee) =>
        employee.id === id ? { ...employee, ...updatedEmployee } : employee
      ),
    }));
  },

  removeEmployee: (id) => {
    set((state) => ({
      employees: state.employees.filter((employee) => employee.id !== id),
    }));
  },
}));

export default useEmployeeStore;
