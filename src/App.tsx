import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto py-10 px-6 min-h-screen flex flex-col gap-6">
      <Header />
      <div className="flex items-center justify-between">
        <Filter />
        <Search />
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
