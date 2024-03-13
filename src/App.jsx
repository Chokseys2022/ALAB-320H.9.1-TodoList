// import React, { useReducer, useState } from "react";
// import Todo from "./Todo.jsx";

// export const ACTIONS = {
//   ADD_TODO: "add-todo",
//   TOGGLE_TODO: "toggle_todo",
//   DELETE_TODO: "delete_todo",
//   EDIT_TODO: "edit_todo"
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name)];
//     case ACTIONS.TOGGLE_TODO:
//       return todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return { ...todo, complete: !todo.complete };
//         }
//         return todo;
//       });
//     case ACTIONS.DELETE_TODO:
//       return todos.filter(todo=> todo.id !== action.payload.id);

//     default:
//       return todos;
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }

// export default function App() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
//     setName("");
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//       {todos.map((todo) => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
//       })}
//     </>
//   );
// }

//////////////////////////////////////
import React, { useReducer, useState } from "react";
import Todo from "./Todo.jsx";
import "./App.css"; 



export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload.name), ...todos];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div className="background">
      <div className="taskcontainer">
        <h1 className="heading">React To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="listItem"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button className="listItem" type="submit">Add Task</button>
        </form>
        {todos.length === 0 && (
          <p className="noItem">No tasks available. Add some tasks!</p>
        )}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

