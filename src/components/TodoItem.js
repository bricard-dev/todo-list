import Button from "./Button";

function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  selectTodo,
}) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex justify-content-center align-items-center p-10 ${
        todo.selected && "selected"
      }`}
    >
      <span className="flex-fill">
        {todo.content} {todo.done && "✅"}
      </span>
      <Button
        text="Valider"
        className="mr-15"
        onClick={(event) => {
          event.stopPropagation();
          toggleTodo();
        }}
      />
      <Button
        text="Modifier"
        className="mr-15"
        onClick={(event) => {
          event.stopPropagation();
          toggleTodoEdit();
        }}
      />
      <Button
        text="Supprimer"
        onClick={(event) => {
          event.stopPropagation();
          deleteTodo();
        }}
      />
    </li>
  );
}

export default TodoItem;
