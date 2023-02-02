import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todoSlice";

type EditTodoModalProps = {
  id: string;
  text: string;

  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditTodoModal = ({ id, text, setIsEdit }: EditTodoModalProps) => {
  const [editedTodo, setEditedTodo] = useState(text);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const editTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editedTodo.trim().length === 0) {
      alert("Please enter some text");
      return;
    }

    dispatch(todosActions.editTodo({ id, text: editedTodo }));
    setIsEdit(false);
  };

  return (
    <div
      onClick={() => setIsEdit(false)}
      className="z-10 bg-black bg-opacity-40 fixed w-full h-full left-0 top-0 grid place-items-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={editTodoHandler}
        className="flex flex-col gap-8 w-[40%] p-6 bg-white rounded-md shadow-lg"
      >
        <div className="border-b-2">
          <input
            type="text"
            ref={inputRef}
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className="w-full border-none text-xl focus:ring-0"
          />
        </div>
        <div className="sm:ml-auto flex flex-col sm:flex-row gap-4 ">
          <button
            onClick={() => setIsEdit(false)}
            type="button"
            className="p-2 bg-red-600 rounded-md min-w-[100px] text-white transition hover:brightness-90"
          >
            Cancel
          </button>
          <button className="p-2 bg-green-500 rounded-md min-w-[100px] text-white transition hover:brightness-110">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodoModal;
