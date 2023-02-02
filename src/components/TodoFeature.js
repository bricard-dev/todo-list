import { useTodoDispatcher, useTodos } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoFeature() {
  const state = useTodos();
  const dispatch = useTodoDispatcher();

  function handleThemeChange(event) {
    dispatch({
      type: "SET_THEME",
      theme: event.target.value,
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex justify-content-center align-items-center">
          <span className="flex-fill">Liste de tâches</span>
          <select value={state.theme} onChange={handleThemeChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoFeature;
