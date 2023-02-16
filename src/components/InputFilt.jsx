
import React from 'react'

const InputFilt = ({text, handleInput, handleSubmit}) => {           
  return (
    <label>
    <input
      type="text"
      value={text}
      placeholder="Введите текст "   
      onChange={(e) => handleInput(e.target.value)}   
    ></input>
    <button className="btn" onClick={handleSubmit}>        
      Добавить
    </button>
  </label>    
  )
}

export default InputFilt        
