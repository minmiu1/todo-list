import React from 'react'

function TaskItem({task, onChangStatusTask, onRemoveTask}) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
        <span className="label">{task.title}</span>
    <div className="actions">
        <input onChange={() => onChangStatusTask(task.id)} checked={Boolean(task.status)} type="checkbox" className="btn-action btn-action-done"/>
        <button onClick={(e) => onRemoveTask(task.id)} className="btn-action btn-action-delete">✖</button>
            </div>
    </li>
    )
}

export default TaskItem
