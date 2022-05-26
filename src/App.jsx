import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
      getTodosLocal();
    }, []);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTodoLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodosLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };


  useEffect(() => {
    handleFilter();
    saveTodoLocalStorage();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
