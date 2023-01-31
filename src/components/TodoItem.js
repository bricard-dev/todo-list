function TodoItem({ todo, deleteTodo, toggleTodo, toggleTodoEdit }) {
  return (
    <li className="mb-10 d-flex justify-content-center align-items-center p-10">
      <span className="flex-fill">
        {todo.content} {todo.done && "✅"}
      </span>
      <button className="btn btn-primary mr-15" onClick={toggleTodo}>
        Valider
      </button>
      <button className="btn btn-primary mr-15" onClick={toggleTodoEdit}>
        Modifier
      </button>
      <button onClick={deleteTodo} className="btn btn-reverse-primary">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
