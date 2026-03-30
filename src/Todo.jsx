import {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"
import TaskDetail from "./TaskDetail";
import axios from 'axios';
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState("");
  const URL = "http://localhost:3000/tasks";
  
  // useEffect(()=> {console.log("UseEffect called!")});
  // useEffect(()=> {console.log("UseEffect called!")},[tasks]);
  // useEffect(()=> {console.log("UseEffect called!")},[newTask]);
  // useEffect(()=> {console.log("UseEffect called!")},[tasks,newTask]);

  const getTask = ()=>{
    axios.get(URL)
    .then((res)=> {
      setTasks(res.data);
    })
    .catch((error)=> console.log(error));
  };
  useEffect(()=> {getTask()},[]);

  const postTask = ()=> {
    axios.post(URL, {taskName:newTask})
    .then((res)=> {
      setTasks([...tasks, res.data]);
      setNewTask("");
    })
    .catch((error)=> console.log(error));
  };

  // url = http://localhost:3000/tasks/1212

  const putTask = (updatedData)=> {
    axios.put(`${URL}/${updatedData.id}`, {taskName:updatedData.taskName})
    .then(()=>{})
    .catch((error)=> console.log(error));
  };
  
  const deleteTask = (delId)=> {
    axios.delete(`${URL}/${delId}`)
    .then(()=>{
      setTasks(tasks.filter((task)=> task.id != delId))
    })
    .catch((error)=> console.log(error));
  };

  return (
    <>
      <div className="todo-header">
          <input
              type="text"
              value={newTask}
              onChange={(e)=>{setNewTask(e.target.value)}}
          />
          <button onClick={()=>{postTask()}}>Add Task</button>
          <button onClick={()=>{getTask()}}>Get Task</button>
      </div>
      <div className="todo-detail">
          {/* <div className="task-detail">
            {tasks.map((task)=><h3 className="task" key={task.id}> {task.taskName} </h3>)}
          </div> */}
          <TaskDetail tasks={tasks} setTasks={setTasks}
            putTask={putTask} deleteTask={deleteTask}
          />
      </div>
    </>
  );
}

export default Todo;
