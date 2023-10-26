import { create } from 'zustand';

const useEmployeeStore = create((set) => ({
  employees: [],
  errorMessage: '',

  setEmployees: (newEmployees) => {
    const hasNegativeValues = newEmployees.some((employee) => {
      return (
        parseFloat(employee.salary) < 0 || parseInt(employee.age, 10) < 0
      );
    });

    if (!hasNegativeValues) {
      set({ employees: newEmployees, errorMessage: '' });
    } else {
      set({ errorMessage: 'Employee data contains negative values' });
    }
  },
}));

export default useEmployeeStore;
