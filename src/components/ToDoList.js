import React from "react";


export default function ToDoList(props){

    function deleteHandle(id){
        props.removeItem(props.id)
    }
    return (
        <ul>
            <li>{props.itemList}</li>
            <button onClick={deleteHandle}>X</button>
        </ul>
    )
}
