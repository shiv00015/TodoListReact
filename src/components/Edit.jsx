import React, { useState } from "react";

function Edit({ updateNewValue }) {
  const [updatedValue, setUpdatedValue] = useState("");
  return (
    <>
      <input
        value={updatedValue}
        onChange={(e) => {
          setUpdatedValue(e.target.value);
        }}
        placeholder="Enter To Do..."
        className="editTask"
      />

      <div className="buttons">
        <button
          onClick={() => {
            updateNewValue(updatedValue);
          }}
          className="saveTask"
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Edit;
