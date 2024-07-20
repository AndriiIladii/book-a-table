import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import RestPlan from "./components/RestPlan";
import Modal from "./components/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);
  const [view, setView] = useState("Rest Plan");

  const handleSetActive = (table) => {
    setModalActive(true);
    setTableNumber(table);
  };

  return (
    <div className="App">
      <Sidebar view={view} setView={setView} />
      <RestPlan setActive={handleSetActive} view={view} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        tableNumber={tableNumber}
      />
    </div>
  );
};

export default App;
