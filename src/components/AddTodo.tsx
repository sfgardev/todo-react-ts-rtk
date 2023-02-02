import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../hooks";
import { todosActions } from "../store/todoSlice";

const AddTodo = () => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!enteredTodo.trim().length) {
      alert("Please enter some value");
      return;
    }

    dispatch(todosActions.addTodo(enteredTodo));
    setEnteredTodo("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="flex border-b-2 pb-3 px-2 border-b-orange-300">
        <input
          onChange={(e) => setEnteredTodo(e.target.value)}
          value={enteredTodo}
          ref={inputRef}
          className="w-full text-xl border-none  focus:ring-0"
          type="text"
          placeholder="Add todo..."
        />
        <button className="bg-gradient-to-l from-orange-400 to-yellow-400 shadow-md text-white px-10 text-xl py-2 rounded-md transition duration-300 hover:brightness-105">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
