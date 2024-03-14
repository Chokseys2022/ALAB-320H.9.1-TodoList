//Todo.jsx

import React from "react";
import { ACTIONS } from "./App";
import "./App.css"; 



export default function Todo({ todo, dispatch }) {
  return (
    <div className="todoItem">
      <span className="todoName" style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <div className="todoButtons">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        />
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
          disabled={!todo.complete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
//--------------------------------------END CODE--------------------------------------------//