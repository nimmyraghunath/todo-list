import { TodoListProps } from "../Types/todotypes";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos,setData }) => {
  const handleDeleteTodo = (id: number) => {
    var todosAfterDelete = todos.filter((todo) => todo.id !== id);
    console.log(todosAfterDelete);
    setTodos(todosAfterDelete);
  };

  const handleChange = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
    const completedTodos = todos?.filter((todo) => todo.completed);
    if (completedTodos) {
      setData(true)
    }
    else{
    setData(false);
    }
  };

  return (
    <div className="todolist">
      {todos.map((todo) => {
        return (
          <div className="todotitle" key={todo.id}>
            <p>
              <span>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleChange(todo.id)}
                 
                  style={{verticalAlign:"middle"}}
                />
              </span>
              <span
                style={{verticalAlign:"middle",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </p>
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
