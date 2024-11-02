import { createContext, useState } from "react";
import { Expense } from "../types/types";

// Exercise: Create add budget to the context

//Define the shape of our context
interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000,
  setBudget: () => {},
};

//Create the context
export const AppContext = createContext<AppContextType>(initialState);

//Create the provider component
export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [budget, setBudget] = useState<number>(initialState.budget);

  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        budget: budget,
        setBudget: setBudget,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
