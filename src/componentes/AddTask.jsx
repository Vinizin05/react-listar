import React, { useState } from "react";


import Button from "./Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition,  }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  function handleEnter(e){
    if (e.keyCode !== 13) { return }
    
      else {handleAddTaskClick()}
    
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        onKeyUp={handleEnter}
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
