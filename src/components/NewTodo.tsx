import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../models/todo";
import { addTodo } from "../redux/modules/todoSlice";

const NewTodo: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = {
      title,
      content,
      id: new Date().toISOString(),
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };
  const onChangeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setContent(event.target.value);
    }
  };
  return (
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
  );
};

export default NewTodo;
