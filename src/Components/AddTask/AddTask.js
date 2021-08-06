import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Action/TaskAction";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const add = () => {
      dispatch(addTask({id: Math.random(), task: text, isDone:false}))
  }
  return (
    <div className='add'>
      <input
        type="text"
        placeholder="Add Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddTask;