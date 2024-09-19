import React from "react";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos_single">
      {" "}
      <span className="todos_single--text">{todo.todo}</span>{" "}
      <div>
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <FaCheck />
        </span>
        <span className="icon">
          <MdDelete />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
