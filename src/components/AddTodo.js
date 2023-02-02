import { useContext, useState } from "react";
import { TodoDispatcherContext } from "../context/TodoContext";
import Button from "./Button";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(TodoDispatcherContext);

  function handleChange(event) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  }

  function handleClick(event) {
    if (value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
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
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
