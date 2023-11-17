"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const [taskToEditDesc, setTaskToEditDesc] = useState<string>(task.desc);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      desc: taskToEditDesc,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <div key={task.id} className="flex flex-col flex-wrap w-[348px] h-44">
      <h2 className="w-full text-2xl text-gray-300 break-words max-w-[20ch]">{task.text}</h2>
      <h3 className="w-full text-sm text-gray-500 break-words my-2 grow">{task.desc}</h3>
      <span className='flex justify-between'>
        <span className="normal-font text-sm text-gray-400">Finish Until: </span>
        <div className="flex flex-row">
          <FiEdit
            onClick={() => setOpenModalEdit(true)}
            cursor='pointer'
            className='text-blue-500'
            size={25}
          />
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleSubmitEditTodo} className="flex flex-col">
              <h3 className='flex justify-center font-bold text-2xl mb-3'>Edit task</h3>
              <div className='flex flex-col my-2'>
                <span className="my-1 font-normal text-lg">Title</span>
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type='text'
                  placeholder='New task title...'
                  className='input input-bordered w-full mb-3'
                />
                <span className="my-1 font-normal text-lg">Description</span>
                <textarea 
                  value={taskToEditDesc}
                  onChange={(e) => setTaskToEditDesc(e.target.value)}
                  placeholder='New task description...'
                  className="textarea textarea-bordered h-32 mb-3"
                />
              </div>
              <button type='submit' className='btn self-end'>
                Submit
              </button>
            </form>
          </Modal>
          <FiTrash2
            onClick={() => setOpenModalDeleted(true)}
            cursor='pointer'
            className='text-red-500 ml-2.5'
            size={25}
          />
          <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
            <h3 className='text-lg'>
              Delete this task?
            </h3>
            <div className='modal-action'>
              <button onClick={() => handleDeleteTask(task.id)} className='btn'>
                Yes
              </button>
            </div>
          </Modal>
        </div>
      </span>
    </div>
  );
};

export default Task;
