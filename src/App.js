import React, { useState } from "react";
import './App.css';
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

export default function App() {
  //Stores all the items in the list
  const [items, setItems] = useState([]);


  //this adds new item to the existing list
  function addItem(item){
    setItems(prevItems => {
      return [...prevItems, item]
    })
  }
  function removeItem(id){
    setItems(prevItems => {
      return (prevItems.filter((item, index) => {
        return (id !== index)
      }))
    })
  }

  
  return (
    <div>
      <Input 
        onAdd = {addItem} 
      />
      {items.map((itemList, index) => {
        return (
          <ToDoList 
            key={index}
            id = {index}
            itemList = {itemList}
            removeItem = {removeItem}

          />
        )
      })}
    </div>
  );
}
