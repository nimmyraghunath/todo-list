import "./App.css";
import TodoItem from "./components/TodoItem";

 const App:React.FC=() =>{

  
  return (
    <div className="App">
      <div className="container">
        <h2>
          To-Do List <img src="./images/checklist.png" alt="checklist" />
        </h2>
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
