
import {createSlice,configureStore} from "@reduxjs/toolkit"

const toDoSlice= createSlice({
    name:'ToDo',
    initialState:{
        toDoList:[],
        taskIndex:undefined,
    },
    reducers:{
        AddGoal(state,action){
           
            state.toDoList.push(action.payload);
        },
        removeGoal(state){
            const goalList=state.toDoList.filter((goal)=>goal.id!==state.taskIndex);
            state.toDoList=goalList;
        },
        updateStatus(state,action){
            const index= state.toDoList.findIndex((task)=>task.id===state.taskIndex);
           state.toDoList[index].status="Complete";
        },
        setTaskIndex(state,action){
            state.taskIndex=action.payload
        },
        updateGoal(state,action){
           const index= state.toDoList.findIndex((task)=>task.id===action.payload.id);
           state.toDoList[index].name=action.payload.name;
           state.toDoList[index].description=action.payload.description;
        }
    }

})



const modalSlice=createSlice({
    name:'modal',
    initialState:{
        modalIsVisible:false,
    },
    reducers:{
        changeModalVisibility(state){
            console.log("modal visibility")
            state.modalIsVisible=!state.modalIsVisible;
        }
    }
})

const store=configureStore({
   reducer:{ToDo:toDoSlice.reducer, Modal:modalSlice.reducer} 
});


export const toDoActions=toDoSlice.actions;
export const modalActions=modalSlice.actions;
export default store;