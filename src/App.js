import react, { useState } from "react";

import "./App.css";
import Tasks from "./componentes/tasks";
import AddTask from "./componentes/AddTask";


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

    return(
        <>
        <div className="container">
          <AddTask />
          <Tasks tasks={tasks} />
        </div>
        </>
      );
};


export default App;