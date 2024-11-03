import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget } from "../../utils/budget-utils";

const Budget = () => {
  const {budget, setBudget} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    try{

    } catch (err: any) {
      const fetchedBudget = await fetchBudget();
      setBudget(fetchedBudget);
      console.log(err.message);
    }
  };


  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div data-testid="budget">Budget: ${budget}</div>
    </div>
  );
};

export default Budget;
