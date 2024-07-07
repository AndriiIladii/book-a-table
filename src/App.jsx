import React, { useState } from "react";
import RestPlan from "./components/RestPlan";
import Modal from "./components/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);

  const handleSetActive = (table) => {
    setModalActive(true);
    setTableNumber(table);
  };

  return (
    <div className="App">
      <RestPlan setActive={handleSetActive} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        tableNumber={tableNumber}
      />
    </div>
  );
};

export default App;
