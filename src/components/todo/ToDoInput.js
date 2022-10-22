import { useState } from "react";
import { toDoActions } from "../../store";
import {useDispatch, } from "react-redux";


import classes from "./ToDoInput.module.css";

const ToDoInput = () => {

    const dispatch=useDispatch();

    const [name,setName]=useState();
    const [description,setDescription]=useState();

    const nameHandler=(event)=>{
        setName(event.target.value);
    }

    const descriptionHandler=(event)=>{
        setDescription(event.target.value);
    }

    const submitToDoHandler=()=>{
        console.log(name);
        console.log(description);
        dispatch(toDoActions.AddGoal({
            id:Math.floor(Math.random() * 100),
            name,
            description,
            status:"Pending",
        }));
        setName("");
        setDescription('');
    }
  return (
    <section className={classes.container}>
      <div className={classes.toDoInput_container} >
        <div className={classes.name_input_container}>
          <div>
            <div>
              <label for="name">Name</label>
            </div>
            <input type="text" id="name" name="name" onChange={nameHandler} value={name}/>
          </div>
          <div>
            <div>
              <label for="description">Description</label>
            </div>
            <input type="text" id="description" name="description" onChange={descriptionHandler} value={description}/>
          </div>
          
        </div>
        <button className={classes.btn} onClick={submitToDoHandler}>Button</button>
      </div>
    </section>
  );
};

export default ToDoInput;
