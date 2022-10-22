import ToDoItem from "./ToDoItem";
import classes from "./ToDoList.module.css";
import { useSelector,useDispatch } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { modalActions, toDoActions} from "../../store";


const ToDoList = () => {
  const toDoList = useSelector((state) => state.ToDo.toDoList);
  const [checkingList,setCheckingList]=useState(false)

  const dispatch=useDispatch();

  useEffect(()=>{
    if(toDoList.length>0)
    {
      setCheckingList(true);
    }
    else{
      setCheckingList(false);
    }
  },[toDoList]);

  const changeModalVisibilityHandler=(taskId)=>{
    dispatch(toDoActions.setTaskIndex(taskId))
    dispatch(modalActions.changeModalVisibility())
  }

  return (
    <Fragment>
      {checkingList && (
        <div className={classes.toDoList_container}>
          {toDoList.map((item) => (
            <div onClick={()=>changeModalVisibilityHandler(item.id)}>
              <ToDoItem
                name={item.name}
                key={item.id}
                id={item.id}
                description={item.description}
                status={item.status}
                
              ></ToDoItem>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ToDoList;
