import React from 'react'
import TaskItem from "./TaskItem"

function TaskList({tasks, showIncomplete, onChangStatusTask, onRemoveTask, setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
            {tasks.filter((task) => showIncomplete ? task.status !== 1 : true).map((task) => (
                <TaskItem 
                key ={task.id}
                task={task} 
                onChangStatusTask={onChangStatusTask} 
                onRemoveTask={onRemoveTask}/>
            ))}
        </ul>
        <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">Show incompleted tasks only</label>
        <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)}/>
    </div>
    </>
  )
}

export default TaskList
