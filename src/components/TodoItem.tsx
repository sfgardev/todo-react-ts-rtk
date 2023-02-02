import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todoSlice";
import EditTodoModal from "./EditTodoModal";

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoItem = ({ id, text, completed }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <>
      {isEdit ? (
        <EditTodoModal setIsEdit={setIsEdit} id={id} text={text} />
      ) : null}
      <li
        className={`bg-slate-200 rounded-md px-2 py-3 flex items-center gap-2 text-xl selection:bg-yellow-300 shadow-md transition ${
          completed ? "bg-opacity-100" : "bg-opacity-50"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(todosActions.toggle(id))}
          className="w-5 h-5 text-green-600 rounded-full focus:ring-0"
        />
        <span
          onClick={() => dispatch(todosActions.toggle(id))}
          className={`${
            completed ? "line-through" : "no-underline"
          } w-full cursor-pointer`}
        >
          {text}
        </span>
        <span
          onClick={() => setIsEdit(true)}
          className="bg-blue-500 text-white rounded-md ml-auto cursor-pointer transition hover:brightness-110"
        >
          <BiEdit size={30} />
        </span>
        <span
          onClick={() => dispatch(todosActions.removeTodo(id))}
          className="bg-red-600 text-white rounded-md cursor-pointer transition hover:brightness-110"
        >
          <TiDeleteOutline size={30} />
        </span>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
