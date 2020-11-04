
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTask from './components/DisplayTask'

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    let task = {
      title: input,
      isCompleted: false
    }
    setTasks([...tasks, task]);
    setInput("");
  }

  const handleCheckBox = (e, idx) => {
    let updateTask = tasks[idx];
    updateTask.isCompleted = e.target.checked;
    setTasks([...tasks.slice(0, idx), updateTask,...tasks.slice(idx+1)]);
  }

  const handleDelete = (e, idx) => {
    setTasks([...tasks.slice(0, idx),...tasks.slice(idx+1)])
  }

  return (
        <div className="bg-dark">
          <form onSubmit={handleAddTask} className="mx-auto col-4 text-warning">
            <div className="form-group">
              <h2 className="text-center">To Do LIST!</h2>
              <input type="text" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-warning" value="Add"/>
          </form>
          <div className="d-flex flex-col col-5 mx-auto">
            {
              tasks.map((task, i) => {
                return <DisplayTask
                        idx={i}
                        key={i}
                        task={task}
                        handleCheckBox={handleCheckBox}
                        handleDelete={handleDelete}
                      />
              })
            }
          </div>
        </div>
      );
}

// const App = () => {
//   const [todolist, setTodolist] = useState([
//     {
//       task: "Finish todolist assignment",
//       isComplete: false
//     },
//     {
//       task: "Clean the cat's litter box",
//       isComplete: false
//     }
//   ]);

//   const [createTodo, setCreateTodo] = useState(
//     {
//       task:"",
//       isComplete: false
//     }
//   );



//   return (
//     <div className="app">
//       <GenerateTask inputs={createTodo} />
//     </div>
//   );
// }

export default App;
