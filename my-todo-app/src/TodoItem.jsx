import React from "react";
import { useState } from "react";



function TodoList(props){

    const [line, setLine] = useState(false);

    // function handleClick(){
    //     setLine((prevValue)=>{
    //         return !prevValue;
    //     })    
    // }

    // function handleClick(){
    //     props.onChecked(props.id);
    // }
    return(
        <div>
            <li onClick= {props.onChecked} >{props.text}</li>
        </div>
    )
}

export default TodoList;

// style={{textDecoration: line?"line-through":"none"}}