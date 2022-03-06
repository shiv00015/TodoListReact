import React, { useState } from "react";
import Edit from "./Edit";
import ListItem from "./ListItem";
import "../styles/List.css";
function List({ data, updateArr, DeleteToItem }) {
  const [view, setView] = useState(false);
  const [done, setDone] = useState(false);

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
    <>
      {!view ? (
        <div className="listRow">
          <div
            className="row"
            style={
              done
                ? {
                    backgroundColor: "red",
                    textDecorationLine: "line-through",
                    color: "white",
                    width: "10rem"
                  }
                : {}
            }
          >
            <ListItem
              newName={data.text}
              EditName={EditName}
              DeleteItem={DeleteItem}
              statusDone={done}
            />
          </div>
          <input
            className="check"
            type="checkbox"
            onChange={(e) => {
              setDone(e.target.checked);
            }}
          />
        </div>
      ) : (
        <div className="row">
          <Edit updateNewValue={updateNewValue} />
        </div>
      )}
    </>
  );
}

export default List;
