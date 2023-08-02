import { ChangeEvent, useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { Todo } from "../Types/todotypes";

const TodoItem: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [showRemoveButton, setShowRemoveButton] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const checkForCompletedTodos = () => {
      if (todos?.length<=0) {
        setShowRemoveButton(false);
        inputRef.current?.focus();
      } else {
        const completedTodos = todos?.filter((todo) => todo.completed);

        if (completedTodos.length > 0) {
          setShowRemoveButton(true);
        } else {
          setShowRemoveButton(false);
        }
      }
    };
    checkForCompletedTodos();
  }, [todos]);

  const handleAddTodo: () => void = () => {
    if (!todo) {
      setError(true);
      inputRef.current?.focus();
      return;
    }
    const todoObj: Todo = {
      id: Math.floor(Math.random() * 1000),
      title: todo,
      completed: false,
    };
    setTodos([...todos, todoObj]);
    setTodo("");
    setError(false);
    inputRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleRemoveCompletedTasks: () => void = () => {
    const completedTodos = todos.filter((todo) => !todo.completed);
    setTodos(completedTodos);
    inputRef.current?.focus();
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
    margin: "35px",
  };

  const setData = (data: boolean) => {
    setShowRemoveButton(data);
  };

  return (
    <>
      <div className="container-row">
        <input
          type="text"
          placeholder="Enter your todo item."
          value={todo}
          name="todo"
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {error && <span style={errorStyle}>Please enter your todo item.</span>}
      <TodoList todos={todos} setTodos={setTodos} setData={setData} />
      {showRemoveButton && (
        <button
          onClick={handleRemoveCompletedTasks}
          style={{ marginTop: "20px" }}
        >
          Remove Completed Todos
        </button>
      )}
    </>
  );
};

export default TodoItem;
