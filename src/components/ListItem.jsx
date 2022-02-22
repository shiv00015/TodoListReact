import React from "react";

function ListItem({ newName, EditName, DeleteItem }) {
  return (
    <>
      <li className="list">{newName}</li>
      <div className="buttons">
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
