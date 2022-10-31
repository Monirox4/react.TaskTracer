import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
import './App.css';


function App() {
  const [tasks,setTasks]=useState(
    [
        {
          id:1,
          text:'Stadying React',
          day:'Oct 30th at 10:15pm',
          reminder:true,
        },
        {
            id:2,
            text:'Go jogging',
            day:'Oct 31th at 16h',
            reminder:true,
          },
          {
            id:3,
            text:'Interview Appointment',
            day:'Nov 1st at 10am',
            reminder:true,
          }
    ]
)

const addTask=(task) => {
  console.log(task);
}
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder =(id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task,reminder:
      !task.reminder}:task
    
  )
  )
    }

  return (
    <div className='container'>
    <Header/>
    <AddTask onAdd={addTask} />
   {tasks.length>0 ? (<Tasks tasks={tasks} 
   onDelete={deleteTask}
   onToggle={toggleReminder}
   />):(
    'NoTasks To Show'
    )}
    </div>
  );
}

export default App;
