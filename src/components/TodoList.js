import { useContext } from "react";
import { TodoStateContext } from "../context/TodoContext";
import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const state = useContext(TodoStateContext);
  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </ul>
  ) : (
    <p>Aucune tâche en cours</p>
  );
}

export default TodoList;
