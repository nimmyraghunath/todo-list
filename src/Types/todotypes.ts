export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }


  export interface TodoListProps{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    setData: (data: boolean) => void
  }