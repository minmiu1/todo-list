import React from 'react'

function AddTaskForm({newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} className="form">
            <label htmlFor="newitem">Add to the todo list</label>
            <input type="text" id="newitem" value={newTask} onChange={handleInputChange}/>
            <button tyle="submit">Add Item</button>
        </form>
  )
}

export default AddTaskForm
 