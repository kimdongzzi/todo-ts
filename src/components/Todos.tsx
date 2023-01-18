import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos: React.FC<{
  // setTodos 가져오기
  isActive: boolean;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ isActive, todos, setTodos }) => {
  return (
    <div className="todos">
      <h3>{isActive ? "해야할 일" : "완료된 일"}</h3>
      <div className="todosWrap">
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              isActive={isActive}
              setTodos={setTodos}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
