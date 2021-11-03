import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();

  return (
    <>
      <div className="back-button-container">
        <Button><a href="/">Voltar</a></Button>     
      </div>
      <div className="task-datails-container">
        <h2>{params.taskTitle}</h2>
        <p>faça as tarefas ou vai ser deserdado</p>
      </div>
    </>
  );
};

export default TaskDetails;
