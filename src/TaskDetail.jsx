import Task from "./Task";

function TaskDetail({tasks, setTasks, putTask, deleteTask}) {
    return(
    <div className="task-detail">
        {
            tasks.map(
                (task) => <Task key={task.id} 
                task={task} tasks={tasks} 
                setTasks={setTasks}
                 putTask={putTask} 
                 deleteTask={deleteTask}/> 
            )
        }
    </div>
    )

}

export default TaskDetail;




// function   TaskDetail({tasks}){
//     return(
//         <div className="task-detail">
//             {tasks.map((task)=>
//             <h3 className="task" key={task.id}
//             >{task.taskName}
//             </h3>)}
//         </div>
//     )
// }
// export default TaskDetail;