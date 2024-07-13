import React from "react";
import { useState } from "react";


function InputArea(props){

    const [text, setText] = useState("");

    const [items, setItems] = useState([]);



    function handleChange(event){
    const value = event.target.value;
    return setText(value);
    }

    return (
        <div className="form">
        {/* <input onChange={handleChange} type="text" value={text} />
        <button onClick={addList}> */}
        {/* <input onChange={props.change} type="text" value={props.text} />
        <button onClick={props.add}> */}
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={()=> {
            props.add(text);
            setText("")
        }}>
        <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;