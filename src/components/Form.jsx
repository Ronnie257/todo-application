import { v4 as uuidv4 } from "uuid";

export const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const handleChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          name=""
          value={inputText}
          id=""
          className="todo-input"
          onChange={handleChangeInputText}
          placeholder="Add Todo"
        />
        <button onClick={handleTodoSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={handleStatus} name="todos" id="" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};
