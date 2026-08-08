
import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setNewTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    setNewTodo((todos) =>
      todos.concat({
        text: input,
        id: crypto.randomUUID(),
      })
    );

    setInput("");
  };

  const removeTodo = (id) => {
    setNewTodo((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

