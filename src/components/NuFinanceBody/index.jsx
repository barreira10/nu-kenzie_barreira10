import { useState } from "react";
import { NewValueForm } from "../forms/NewValueForm";
import { AmountSection } from "../sections/AmountSection";
import { ListSection } from "../sections/ListSection";
import styles from "./style.module.scss";

export const NuFinanceBody = () => {
  const [financeList, setFinanceList] = useState([]);

  const addFinance = (formData) => {
    const newFinance = { ...formData, id: crypto.randomUUID() };
    setFinanceList([...financeList, newFinance]);
  };

  const removeFinance = (removeId) => {
    const newFinanceList = financeList.filter(
      (finance) => finance.id !== removeId
    );
    setFinanceList(newFinanceList);
  };

  return (
    <div className={styles.display}>
      <div>
        <NewValueForm addFinance={addFinance} />
        <AmountSection financeList={financeList} />
      </div>
      <ListSection financeList={financeList} removeFinance={removeFinance} />
    </div>
  );
};