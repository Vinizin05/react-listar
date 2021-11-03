import react, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./componentes/Header";
import "./App.css";
import Tasks from "./componentes/tasks";
import AddTask from "./componentes/AddTask";
import TaskDetails from "./componentes/TaskDatails";
import Task from "./componentes/task";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "ler livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskid) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [
      ...tasks,
      {
        title: tasktitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskid) => {
    const newTasks = tasks.filter((task) => task.id !== taskid);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  );
};

export default App;
