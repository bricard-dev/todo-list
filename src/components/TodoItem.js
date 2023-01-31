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
      <button
        className="btn btn-primary mr-15"
        onClick={(event) => {
          event.stopPropagation();
          toggleTodo();
        }}
      >
        Valider
      </button>
      <button
        className="btn btn-primary mr-15"
        onClick={(event) => {
          event.stopPropagation();
          toggleTodoEdit();
        }}
      >
        Modifier
      </button>
      <button
        className="btn btn-reverse-primary"
        onClick={(event) => {
          event.stopPropagation();
          deleteTodo();
        }}
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
