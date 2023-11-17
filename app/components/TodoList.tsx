import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="grid gap-5 mx-auto">
      {tasks.map((task) => (
        <div className="flex rounded-xl max-w-[300px] sm:max-w-[400px] bg-base-200 shadow-xl">
          <div className="p-6">
            <span className=""><Task key={task.id} task={task} /></span>
          </div>
        </div>
      ))}  
    </div>
  );
};

export default TodoList;
