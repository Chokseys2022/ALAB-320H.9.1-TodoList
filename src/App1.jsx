// import { useState } from 'react'

// import './App.css'




// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodo = () => {
//     if (newTodo.trim() !== "") {
//       setTodos([{ text: newTodo, completed: false, editing: false }, ...todos]);
//       setNewTodo("");
//     }
//   };

//   const toggleComplete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };

//   const editTodoItem = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].editing = true;
//     setTodos(updatedTodos);
//   };

//   const updateEditInput = (value, index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].text = value;
//     setTodos(updatedTodos);
//   };

//   const saveEditedTodoItem = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].editing = false;
//     setTodos(updatedTodos);
//   };

//   const deleteTodoItem = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="Add a new todo"
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <div id="todo-list">
//         {todos.map((todo, index) => (
//           <div key={index} className="todo-item">
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleComplete(index)}
//             />
//             {todo.editing ? (
//               <input
//                 type="text"
//                 value={todo.text}
//                 onChange={(e) => updateEditInput(e.target.value, index)}
//               />
//             ) : (
//               <span>{todo.text}</span>
//             )}
//             {!todo.editing && (
//               <button onClick={() => deleteTodoItem(index)}>Delete</button>
//             )}
//             {!todo.editing && (
//               <button onClick={() => editTodoItem(index)}>Edit</button>
//             )}
//             {todo.editing && (
//               <button onClick={() => saveEditedTodoItem(index)}>Save</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TodoList;

