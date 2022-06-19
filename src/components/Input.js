import React, { useState } from "react";

export default function Input(props) {
    //this state is for storing each value of the input
  const [item, setItem] = useState("");

  function changeHandle(event) {
    const value = event.target.value;
    setItem(value);
  }

  function clickHandle(event) {
    event.preventDefault();
    if (item.length > 5) {
      props.onAdd(item);
      setItem("");
    } else {
      alert("list is short, add list greater than 5");
    }
  }

  return (
    <div className="form">
      <input
        onChange={changeHandle}
        value={item}
        placeholder="What are you doing?"
      ></input>
      <button type="submit" onClick={clickHandle}>
        Add
      </button>
    </div>
  );
}
