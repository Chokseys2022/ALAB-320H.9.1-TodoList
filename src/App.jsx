import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="background">
      <p className="heading">To Do List</p>
      <div className="taskcontainer">
        <div>
          <input className='text'/>
          <button className ='addButton'>ADD</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
