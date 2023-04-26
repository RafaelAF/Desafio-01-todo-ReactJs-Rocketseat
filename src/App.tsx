import { useState, useEffect, ChangeEvent } from 'react'
import styles from './App.module.css'
import todoLogo from './assets/Logo.svg'
import { Empty } from './components/Empty'


import {PlusCircle} from 'phosphor-react'
import { Task } from './components/Task'
import { TaskType } from './types/Task'





function App() {
  const [created, setCreated] = useState(0)
  const [completed, setCompleted] = useState(0)

  const [nameTask, setNameTask] = useState('')


  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(()=>{
    setCreated(tasks.length)
    setCompleted((tasks.filter(task => task.isDone == true)).length)
  },[tasks])

  const handleInputTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value)
  }

  const handleAddTask = () => {
    if(nameTask){
      setTasks([...tasks, {isDone: false, desc: nameTask}])
    }
    setNameTask('')
  }

  const deleteTask = (task: TaskType) => {
    setTasks(tasks.filter(el => el.desc != task.desc))
  }

  const alterStatusTask = (check: boolean, data: TaskType) => {


    const novaLista = tasks.map(task =>{
      if(task.desc == data.desc){
        return {...task, isDone: check}
      }
      return task
    })
    // setTasks(tasks.map(el => console.log(el.isDone == check)))
    // tasks.map(el => el.desc == data.desc ? el.isDone = check : el.isDone = el.isDone)
    setTasks(novaLista)
  }
 


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={todoLogo} alt="" />
      </header>
      <main className={styles.main}>
          <nav className={styles.inputTaskContainer}>
              <input 
                value={nameTask}
                onChange={handleInputTask}
                className={styles.inputTask} 
                type="text"
                placeholder='Adicione uma nova tarefa'
              />
              <button 
                onClick={handleAddTask}
               className={styles.btnCreateTask}>Criar <PlusCircle className={styles.icon} size={20}/></button>
            </nav>
        <div className={styles.tasksInfoContainer}>
          <div className={styles.taskInfo}>
            <div className={styles.created}><p>Tarefas Criadas </p><span>{created}</span></div>
            <div className={styles.completed}><p>Concluidas</p><span>{created == 0 ? created : `${completed} de ${created}`}</span></div>
          </div>
          <div className={styles.tasksContainer}>
            {tasks.length == 0 &&
                <Empty />
            }
            
            {tasks.length !== 0 &&
                tasks.map((task, index)=>(
                  <Task key={index} data={task} deleteTask={deleteTask} alterStatusTask={alterStatusTask} />
                ))
            }
            
            
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
