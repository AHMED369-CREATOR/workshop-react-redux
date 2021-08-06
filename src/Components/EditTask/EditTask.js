import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../JS/Action/TaskAction";

const EditTask = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask(todo.id,editedTask));
    handleClose()
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Edit Todo..."
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={edit}>
          Save Changes
        </Button>
      </Modal>
    </div>
  );
};

export default EditTask;