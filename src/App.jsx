import { useContext } from "react";
import { AppContext } from "./context-api/AppContext";
import Form from "./components/form";
import Todo from "./components/todo";

const App = () => {
  const todos = useContext(AppContext);
  console.log(todos);

  return (
    <div className="w-full h-screen bg-purple-700 text-white flex items-center justify-center">
      <div className="w-[31.25rem] bg-neutral-800 rounded-lg p-5">
        <h1 className="text-center text-3xl font-semibold">Get Things Done!</h1>
        <Form />
        <div className="h-60 overflow-y-scroll todos">
          {todos.map((item) => {
            return <Todo text={item} key={item.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
