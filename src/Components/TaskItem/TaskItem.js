import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../JS/Action/TaskAction'
import EditTask from '../EditTask/EditTask'
import './TaskItem.css'

const TaskItem = ({todo}) => {

    const dispatch = useDispatch()
    return (
        <div className='task'>
            <div className={todo.isDone ? 'done' : null}>
                {todo.task}
            </div>
            <button onClick={()=> dispatch(deleteTask(todo.id))}>Delete</button>
            <button onClick={()=> dispatch(completeTask(todo.id))}>{todo.isDone ? 'Undo' : 'Complete'}</button>
            <EditTask todo={todo}/>
        </div>
    )
}

export default TaskItem