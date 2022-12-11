import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  return (
    <>
      <p>Todo tasks</p>
      <div className="header">
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter a todo..."
            value={input}
            required
            onChange={onInputChange}
          />
          <button>{editTodo ? "Ok" : "Add"}</button>
        </form>
        <div>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.title}
                onChange={(event) => event.preventDefault()}
              />
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
