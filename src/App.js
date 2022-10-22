import Header from "./components/header/Header";
import ToDoInput from "./components/todo/ToDoInput";
import ToDoList from "./components/todo/ToDoList";
import ToDoItemCRUD from "./components/ToDoItemCRUD/ToDoItemCRUD";
import { useSelector } from "react-redux";



const App=()=> {

  const modalVisibility=useSelector((state)=>state.Modal.modalIsVisible)

  return (
    <div>
      { modalVisibility && <ToDoItemCRUD></ToDoItemCRUD>}
      
      <Header></Header>
      <ToDoInput></ToDoInput>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
