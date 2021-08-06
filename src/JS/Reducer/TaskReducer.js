import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Type/Index";

const initialstate = {
  tasks: [
    {
      id: 0,
      task: "learn Redux",
      isDone: true,
    },
    {
      id: 1,
      task: "learn ES6",
      isDone: true,
    },
    {
      id: 2,
      task: "learn Express",
      isDone: false,
    },
  ],
};

const taskReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((el)=> el.id === payload.id ? {...el, task: payload.newValue} : el)
        
      };

    default:
      return state;
  }
};

export default taskReducer;