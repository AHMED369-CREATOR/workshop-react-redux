import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = () => {
    const tasks = useSelector(state => state.taskReducer.tasks)
    return (
        <div>
            {tasks.map((el) => <TaskItem todo ={el} key={el.id}/>)}
        </div>
    )
}

export default TaskList