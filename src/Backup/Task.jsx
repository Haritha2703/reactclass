import { useState } from "react";

function Task({task, tasks, setTasks, putTask, deleteTask}) {
    const [edit, setEdit] = useState(false);
    const editTask = (evalue)=> {
        const updTask = tasks.map((eTask)=>{
            if (eTask.id === task.id) {
                eTask.taskName = evalue;
            }
            return eTask;
        })
        setTasks(updTask);
    }
    const saveTask = ()=> {
        putTask(task);
        setEdit(false);
    }
    return (
        <div className="task">
            {edit 
                ? 
                    <>
                        <input type="text" value={task.taskName} 
                            onChange={(e)=>editTask(e.target.value)}
                         />
                        <button onClick={()=>saveTask()}>Save</button> 
                    </>
                : 
                    <>
                        {task.taskName}
                        <button onClick={()=>setEdit(true)}>Edit</button>
                    </>
            }
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
        </div>
    )
}

export default Task;