import React, { ChangeEvent, FormEvent, useState } from "react";

import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="container">
      <NewTodo />
      <Todos isActive={true} />
      <Todos isActive={false} />
    </div>
  );
};

export default App;
