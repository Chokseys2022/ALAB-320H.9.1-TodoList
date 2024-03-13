import React from "react";
import {ACTIONS} from './App'

export default function Todo({ todo, dispatch }) { // Added dispatch to props
  return ( // Moved return here
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</span>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
      <button>Delete</button>
    </div>
  );
}
