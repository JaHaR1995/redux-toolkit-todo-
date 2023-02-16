import React from 'react'
import {useDispatch} from 'react-redux'
import {removeTodo, handleChange} from '../store/todoSlice'


const TodoItem = ({id, text, completed}) => {   

 const dispatch = useDispatch()  

  return (
    <li>
         <input type="checkbox"  checked={completed} onChange={() => dispatch(handleChange({id}))}/>
            <span>{text}</span>
            <span
              className="del"
              style={{ color: "red" }}
              onClick={() => dispatch(removeTodo({id}))}>                     
              &times;
            </span>
    </li>
  )
}

export default TodoItem 
