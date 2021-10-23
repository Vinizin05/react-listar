import react, { useState } from "react";
import {v4 as uuidv4} from 'uuid';

import "./App.css";
import Tasks from "./componentes/tasks";
import AddTask from "./componentes/AddTask";
import Task from "./componentes/task";


const App = () => {
    const [tasks, setTasks] = useState([
      {
          id: '1',
          title: 'estudar programação', 
          completed: false,
      },
      {
          id: '2',
          title: 'ler livros',
          completed: true,  
      }
    ]);

    const handleTaskClick = (taskid) => {
      const newTasks = tasks.map(task => {
        if (task.id === taskid) return {...task, completed: !task.completed}

        return task;
      });

      setTasks(newTasks);

    }

    const handleTaskAddition = (tasktitle) => {
      const newTasks = [
            ...tasks,
            {
                title: tasktitle,
                id: uuidv4(),
                completed: false,
            },
      ];    

      setTasks(newTasks) 

    };

    return(
        <>
        <div className="container">
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tasks={tasks}  handleTaskClick={handleTaskClick}/>
        </div>
        </>
      );
};


export default App;