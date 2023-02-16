import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import InputFilt from "./components/InputFilt";
import {useDispatch} from 'react-redux'
import {addTodo} from './store/todoSlice'         

function App() {
  const [text, setText] = useState('');   
  const  dispatch  = useDispatch();         

  const addTask =() => {
    if(text){                      
      dispatch(addTodo({text}))  
      setText('')                     

    }
  };
  
  return (
    <div className="App">
      <InputFilt  text={text} handleInput={setText} handleSubmit={addTask}   /> 
         <TodoList/>              
    </div>
  );                
}

export default App;
