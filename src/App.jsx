import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div>
          <div className="heading">    
            <h1>To Do List</h1>
           <div className= "task"></div>
           <input/>
           <button>ADD</button>
           <button>EDIT</button>
           <button>DELETE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
