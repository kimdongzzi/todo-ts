import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../models/todo";
import { RootState } from "../redux/config/configStore";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos: React.FC<{
  isActive: boolean;
}> = ({ isActive }) => {
  const todos = useSelector((state: RootState) => state.todos);

  console.log(todos);
  return (
    <div className="todos">
      <h3>{isActive ? "해야할 일" : "완료된 일"}</h3>
      <div className="todosWrap">
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => (
            <TodoItem key={item.id} item={item} isActive={isActive} />
          ))}
      </div>
    </div>
  );
};

export default Todos;
