import React, {useState} from 'react'
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import AddTaskForm from './components/AddTaskForm'
import "./App.css"


function App() {
const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code", status: 0 },
])

const [showIncomplete, setShowIncomplete] = useState(false)
const [newTask, setNewTask] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask) {
        const task = {
            id: Date.now(),
            title: newTask,
            status: 0,
        }
        setTasks([...tasks, task])
        setNewTask("")
    }
}

const handleInputChange = (e) => {
    setNewTask(e.target.value)
    console.log(e.target.value);
}

const onChangStatusTask = (taskId) => {
    const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
            return {...task, status: task.status === 0 ? 1 : 0}
            }
            return task
            })
            setTasks(newTasks)
}

const onRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
}

  return (
    <div className="container">
        <Header title="Todo List" subTitle="Get things done, one item at a time." />

        <TaskList 
        tasks={tasks} 
        showIncomplete={showIncomplete} 
        onChangStatusTask={onChangStatusTask} 
        onRemoveTask={onRemoveTask}
        setShowIncomplete={setShowIncomplete}/>
  
        <AddTaskForm 
        newTask={newTask}
        handleSubmit={handleSubmit}
         handleInputChange={handleInputChange} />
    </div>
  )
}

export default App
