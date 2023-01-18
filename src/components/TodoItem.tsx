import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../models/todo";
import { removeTodo, switchTodo } from "../redux/modules/todoSlice";
import "./TodoItem.css";

const TodoItem: React.FC<{
  item: Todo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  const dispatch = useDispatch();

  const onSwitchHandler = () => {
    dispatch(switchTodo({ ...item, id: item.id }));
  };

  const onRemoveHandler = () => {
    dispatch(removeTodo({ ...item, id: item.id }));
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
