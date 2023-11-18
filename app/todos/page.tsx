import AddTask from "../components/AddTask";
import TodoList from "../components/TodoList";
import Link from 'next/link'
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <main>
      <div className="flex mx-auto my-4 items-center justify-center">
        <AddTask />
      </div>
      <div className="flex mx-auto items-center justify-center">
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}