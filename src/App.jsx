import React, { useState } from "react";
import RestPlan from "./restPlan.svg";
import Modal from "./components/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="App">
      <RestPlan onClick={() => setModalActive(true)} />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
