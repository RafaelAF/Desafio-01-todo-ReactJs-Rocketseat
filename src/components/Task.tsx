import styles from './Task.module.css'

import { Trash, Check} from 'phosphor-react'
import { useState } from 'react'
import { TaskType } from '../types/Task'


type Props = {
    data: TaskType,
    deleteTask: () => void,
    alterStatusTask: () => void
}


export const Task = ({data, deleteTask, alterStatusTask}: Props) => {

    const [check, setCheck] = useState(data.isDone)

    const handleChangeDoneTask = () => {
        setCheck(!check)
        alterStatusTask(!check, data)
    }

    const handleDeleteTask = () => {
        deleteTask(data)
    }

    


    return (
        <div className={styles.tasksContainerFill}> 
            <div className={styles.task}>
                    <div className={styles.taskData}>
                    
                        <div 
                            onClick={handleChangeDoneTask}
                            className={check ? styles.checkboxCheck : styles.checkboxUncheck}>
                                <Check 
                                    color={check ? '#fff' : 'transparent'} 
                                    weight='duotone' 
                                />
                        </div>
                        
                        <p className={check ? styles.descTachado : styles.descNormal}>{data.desc}</p>
                    </div>
                    <Trash onClick={handleDeleteTask} className={styles.lixo} size={20} />
            </div>
        </div>
    );
}