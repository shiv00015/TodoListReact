import React, { useState } from "react";
import List from "./List";
import "../styles/App.css";
function App() {
  const [currValue, setCurrentValue] = useState({
    text: "",
    key: ""
  });
  const [todoValues, setTodoValues] = useState([]);

  const addElements = (e) => {
    e.preventDefault();
    return !currValue.text
      ? alert("EnterValue")
      : setTodoValues((prev) => {
          setCurrentValue({ text: "" });
          return [...prev, currValue];
        });
  };

  function updateArr(newOne, key) {
    const item = todoValues;
    item.map((item) => {
      if (item.key === key) {
        item.text = newOne;
      }
    });

    setTodoValues(item);
  }

  function DeleteToItem(key) {
    const newArr = todoValues.filter((data) => {
      return data.key !== key;
    });

    setTodoValues(newArr);
  }

  return (
    <div id="main">
      <form onSubmit={addElements}>
        <input
          id="task"
          placeholder="Enter To Do..."
          value={currValue.text}
          onChange={(e) => {
            setCurrentValue({ text: e.target.value, key: Date.now() });
          }}
        />
        <button id="btn" type="submit">
          Add
        </button>
      </form>
      {todoValues.map((data, index) => {
        return (
          <List
            className="list"
            key={index + 1}
            data={data}
            updateArr={updateArr}
            DeleteToItem={DeleteToItem}
          />
        );
      })}
    </div>
  );
}

export default App;
