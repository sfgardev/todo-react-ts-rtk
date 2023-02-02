import { useAppDispatch, useAppSelector } from "../hooks";
import { todosActions } from "../store/todoSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchInput = useAppSelector((state) => state.todos.searchInput);
  console.log("Search renders");

  return (
    <input
      type="search"
      value={searchInput}
      onChange={(e) => dispatch(todosActions.changeSearchInput(e.target.value))}
      className="w-1/3 border-gray-400 rounded-md shadow-md"
      placeholder="Search..."
    />
  );
};

export default Search;
