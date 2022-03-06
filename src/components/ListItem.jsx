import React from "react";

function ListItem({ newName, EditName, DeleteItem, statusDone }) {
  
  return (
    <>
      <li className="list">{newName}</li>
      <div className="buttons" style={statusDone ? { display: "none" } : {}}>
        <button
          onClick={() => {
            EditName();
          }}
          className="edit"
        >
          Edit
        </button>
        <button
          onClick={() => {
            DeleteItem();
          }}
          className="delete"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default ListItem;
