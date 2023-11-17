import Link from 'next/link'
import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main>
      <div className="hidden md:flex relative justify-end align-bottom">
        <Clock />
      </div>
      <div className="my-8 block mx-auto">
        <div className="text-center my-5 flex flex-col gap-4">
          {/* RESPONSIVENESS */}
          <div className="flex font-bold justify-center mt-8 mb-4 items-center text-amber-200">
            {/* MOBILE */}
            <div className="flex sm:hidden">
              <span className="text-3xl">✨ WorkBench</span>
              <div className="badge badge-lg ml-3 bg-amber-200 text-gray-950 justify-center items-center">v2.0</div>
            </div>
            {/* DESKTOP */}
            <div className="sm:flex hidden">
              <span className="text-5xl">✨ WorkBench</span>
              <div className="badge badge-lg my-auto ml-3 bg-amber-200 text-gray-950 justify-center items-center align-middle">v2.0</div>
            </div>
          </div>
          <div className="flex mx-auto items-center justify-center">
            <AddTask />
          </div>
        </div>
        <div className="flex mx-auto items-center justify-center">
          <TodoList tasks={tasks} />
        </div>
      </div>
    </main>
  );
}
