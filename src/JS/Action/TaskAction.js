import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Type/Index";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,//{id:x,task : "";isDone:true }
  };
};

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});

export const editTask = (id, newValue) => ({
  type: EDIT_TASK,
  payload: { id, newValue },
});