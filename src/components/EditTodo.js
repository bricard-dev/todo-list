import { useContext, useState } from "react";
import { TodoDispatcherContext } from "../context/TodoContext";
import Button from "./Button";

function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);
  const dispatch = useContext(TodoDispatcherContext);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button text="Sauvegarder" onClick={handleClick} className="mr-15" />
      <Button
        text="Annuler"
        onClick={() => {
          dispatch({ type: "TOGGLE_EDIT_TODO", id: todo.id });
        }}
      />
    </div>
  );
}

export default EditTodo;
