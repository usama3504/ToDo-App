import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions, toDoActions } from "../../store";
import Modal from "../UI/modal/Modal";
import classes from "./ToDoItemCRUD.module.css";

const ToDoItemCRUD = () => {
  const selectedTaskId = useSelector((state) => state.ToDo.taskIndex);
  console.log(selectedTaskId);
  const toDoList = useSelector((state) => state.ToDo.toDoList);
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const selectedTaskIndex = toDoList.findIndex(
    (task) => task.id === selectedTaskId
  );

  useEffect(() => {
    setName(toDoList[selectedTaskIndex].name);
    setDescription(toDoList[selectedTaskIndex].description);
  }, [selectedTaskIndex, toDoList]);

  const dispatch = useDispatch();

  const changeModalVisibilityHandler = () => {
    dispatch(modalActions.changeModalVisibility());
  };

  const updateTaskHandler = () => {
    dispatch(
      toDoActions.updateGoal({
        id: selectedTaskId,
        name,
        description,
        status: toDoList[selectedTaskIndex].status,
      })
    );
    changeModalVisibilityHandler();
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const completeTaskStatusHandler=()=>{
    dispatch(
      toDoActions.updateStatus()
    );
    changeModalVisibilityHandler();

  }

  const removeGoalHandler=()=>{
    dispatch(toDoActions.removeGoal());
    changeModalVisibilityHandler();
  }
  return (
    <Modal onClose={changeModalVisibilityHandler}>
      <div className={classes.name_input_container}>
        <div className={classes.name_input}>
          <div>
            <label for="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            onChange={nameHandler}
          />
        </div>
        <div className={classes.name_input}>
          <div>
            <label for="description">Description</label>
          </div>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={description}
            onChange={descriptionHandler}
          />
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <button className={classes.btn} onClick={updateTaskHandler}>
          Save
        </button>
        <button className={classes.btn} onClick={completeTaskStatusHandler}>Complete</button>
        <button className={classes.btn}onClick={removeGoalHandler}>Delete</button>
      </div>
    </Modal>
  );
};

export default ToDoItemCRUD;
