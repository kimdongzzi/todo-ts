import React from "react";
import { Todo } from "../models/todo";
import "./TodoItem.css";

const TodoItem: React.FC<{
  item: Todo;
  isActive: boolean;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ item, isActive, setTodos }) => {
  const onSwitchHandler = () => {
    setTodos((prev) =>
      prev.map((s) => {
        if (s.id === item.id) {
          return { ...s, isDone: !s.isDone };
        } else {
          return s;
        }
      })
    );
  };

  const onRemoveHandler = () => {
    setTodos((prev) => prev.filter((r) => r.id !== item.id));
  };
  return (
    <div className="todoitem">
      <div className="todoTextWrap">
        <h4 className="todoTitle">{item.title}</h4>
        <p className="todoContent">{item.content}</p>
      </div>
      <div className="todoBtnWrap">
        <button onClick={onSwitchHandler}>{isActive ? "완료" : "취소"}</button>
        <button onClick={onRemoveHandler}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
