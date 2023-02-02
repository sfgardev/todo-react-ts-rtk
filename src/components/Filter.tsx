import React from "react";
import { useAppDispatch } from "../hooks";
import { FilterType, todosActions } from "../store/todoSlice";

const Filter = () => {
  const dispatch = useAppDispatch();

  const changeFilterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(todosActions.changeFilter(e.target.value as FilterType));
  };

  return (
    <select
      onChange={changeFilterHandler}
      className="self-start border-none bg-slate-200 rounded-md shadow-md"
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Not completed">Not completed</option>
    </select>
  );
};

export default Filter;
