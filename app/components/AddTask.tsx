"use client";

// import { AiOutlinePlus } from "react-icons/ai";
// import { FiPlusCircle } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const [newTaskValueDesc, setNewTaskValueDesc] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
      desc: newTaskValueDesc,
    });
    setNewTaskValue("");
    setNewTaskValueDesc("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='rounded-xl bg-base-200 flex px-3 py-2'
      >
        <TiPlus className='font-bold hidden sm:block' size={28} />
        <TiPlus className='font-bold sm:hidden block' size={20} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo} className="flex flex-col">
          <h3 className='font-bold text-2xl mb-3'>Create task</h3>
          <div className='flex flex-col my-2'>
            <span className="my-1 font-normal text-lg">Title</span>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='Task Title...'
              className='input input-bordered w-full mb-3'
            />
            <span className="my-1 font-normal text-lg">Description</span>
            <textarea 
              value={newTaskValueDesc}
              onChange={(e) => setNewTaskValueDesc(e.target.value)}
              placeholder='New task description...'
              className="textarea textarea-bordered h-32 mb-3"
            />
          </div>
          <button type='submit' className='btn self-end'>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
