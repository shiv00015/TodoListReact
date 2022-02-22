import React, { useState } from "react";
import Edit from "./Edit";
import ListItem from "./ListItem";
import "../styles/List.css";
function List({ data, updateArr, DeleteToItem }) {
  const [view, setView] = useState(false);

  function updateNewValue(newValue) {
    !newValue ? alert("Enter Todo pleace") : updateArr(newValue, data.key);
    setView((prev) => !prev);
  }

  function EditName() {
    setView((prev) => !prev);
  }

  function DeleteItem() {
    DeleteToItem(data.key);
  }
  return (
    <div className="row">
      {!view ? (
        <>
          <ListItem
            newName={data.text}
            EditName={EditName}
            DeleteItem={DeleteItem}
          />
        </>
      ) : (
        <>
          <Edit updateNewValue={updateNewValue} />
        </>
      )}
    </div>
  );
}

export default List;
