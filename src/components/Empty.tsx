import clipBoard from '../assets/Clipboard.svg'
import styles from './Empty.module.css'

export const Empty = () => {
    return (
        <div className={styles.tasksContainerEmpty}>
            <img src={clipBoard} alt="" /> 
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        
    );
}