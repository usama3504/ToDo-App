import { useEffect, useState } from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem = (props) => {
  const [checkStatus, setcheckStatus] = useState(false);

  useEffect(() => {
    if (props.status === "Complete") {
      setcheckStatus(true);
    }
  },[props.status]);

  return (
    <section className={classes.toDoItem_container}>
      <div className={classes.Text_Status_container}>
        <div>
          <h1 className={classes.taskName}>{props.name}</h1>
          <div className={classes.description}>
            <p>{props.description}</p>
          </div>
        </div>
        <div>
          <p
            style={{
              borderColor:checkStatus? "green":"red",
            }}
            className={classes.status}
          >
            {props.status}
          </p>
        </div>
      </div>

      {/* <button onClick={props.onClick}>Press</button> */}
    </section>
  );
};

export default ToDoItem;
