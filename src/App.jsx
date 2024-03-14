//App.jsx

// Imports
import React, { useReducer, useState } from "react";
import "./App.css";
import note from "../note.png";

// Define action
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
  EDIT_TODO: "edit_todo",
};

// Define a reducer function to handle state updates based on actions
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      // When adding a new todo, create a new todo object and prepend it to the array
      return [newTodo(action.payload.name), ...todos];
    case ACTIONS.TOGGLE_TODO:
      // When toggling a todo, update the completed status of the corresponding todo
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      // When deleting a todo, filter out the todo with the specified ID
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      // update the name of the corresponding todo
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });
    default:
      return todos;
  }
}

// Function to create a new todo object
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

// Todo component representing each individual todo item
export function Todo({ todo, dispatch }) {
  // State to manage edit mode and text input for editing
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.name);

  // function to enable edit mode
  const handleEdit = () => {
    setEditMode(true);
  };

  //function to save edited todo
  const handleSave = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { id: todo.id, name: editText },
    });
    setEditMode(false);
  };

  return (
    <div className="todos">
      {editMode ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
        />
      ) : (
        <span
          className="todoName"
          style={{ color: todo.complete ? "#AAA" : "#000" }}
        >
          {todo.name}
        </span>
      )}
      <div className="todoButtons">
        {!editMode && (
          <>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            />
            <button onClick={handleEdit} disabled={editMode}>
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                })
              }
              disabled={!todo.complete}
            >
              Delete
            </button>
          </>
        )}
        {editMode && <button onClick={handleSave}>Save</button>}
      </div>
    </div>
  );
}

// App component for todo list appl
export default function App() {
  // State for managing todo list and input field for new todo
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  // Handler function for adding new todo
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div className="background">
      <div className="taskcontainer">
        {/* <h1 className="heading">To Do List</h1> */}

        <div className="note-image-container">
          <img src={note} alt="Note" className="notepad-image" />
        </div>
        {/* Form for adding new todo */}
        <form onSubmit={handleSubmit}>
          <input
            className="addTodo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add new to do..."
          />
          <button className="addTodo" type="submit">
            Add Task
          </button>
        </form>

        {todos.length === 0 && (
          <p className="noItem"> Task list is empty, add a new task</p>
        )}

        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
//--------------------------------------END CODE--------------------------------------------//
