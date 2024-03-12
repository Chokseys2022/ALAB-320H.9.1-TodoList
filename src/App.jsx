import React from "react";

function reducer(state, action) {}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
}

return (
  <>
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  </>
);
