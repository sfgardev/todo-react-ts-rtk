import { useEffect, useMemo } from "react";
import empty from "../assets/empty-box.svg";
import { useAppSelector } from "../hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const filter = useAppSelector((state) => state.todos.filter);
  const searchInput = useAppSelector((state) => state.todos.searchInput);

  const filteredList = useMemo(() => {
    let result = todos;

    if (filter === "Completed") {
      result = result.filter((todo) => todo.completed);
    }
    if (filter === "Not completed") {
      result = result.filter((todo) => !todo.completed);
    }
    if (searchInput) {
      result = result.filter((todo) =>
        todo.text.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return result;
  }, [filter, todos, searchInput]);

  return (
    <>
      {filteredList.length === 0 ? (
        <>
          <h2 className="text-center text-2xl text-gray-500">
            Your todo list is empty.
          </h2>
          <img src={empty} alt="Empty box" className="w-1/2 mx-auto" />
        </>
      ) : (
        <ul className="flex flex-col gap-4">
          {filteredList.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
