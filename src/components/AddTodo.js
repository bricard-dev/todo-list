import { useState } from "react";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleClick(event) {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <button onClick={handleClick} className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}

export default AddTodo;