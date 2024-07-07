import React, { useState } from "react";
import RestPlan from "./components/RestPlan";
import Modal from "./components/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <RestPlan setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default App;
