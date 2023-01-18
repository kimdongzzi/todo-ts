import React, { ChangeEvent, FormEvent, useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

const App: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onChangeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setContent(event.target.value);
    }
  };

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = {
      title,
      content,
      id: new Date().toISOString(),
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={addTodoHandler}>
        <div className="form-column">
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTextHandler}
          />
        </div>
        <div className="form-column">
          <label>내용</label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChangeTextHandler}
          />
        </div>
        <button>추가</button>
      </form>
      <Todos isActive={true} todos={todos} setTodos={setTodos} />
      <Todos isActive={false} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
