"use client";
import { useEffect } from "react";
import NewTask from "./NewTask";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
}

type ModalProps = {
  type: string;
  task?: Task;
  modalHandler: (visibility: string, newModalType: string) => void;
};

export default function Modal({ type, modalHandler, task }: ModalProps) {
  useEffect(() => {
    const handleClickOutsideTask = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const modal = document.querySelector(".modal");
      if (modal && !modal.contains(target)) {
        modalHandler("invisible", "");
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTask);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTask);
    };
    console.log(task);
  }, [modalHandler]);

  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-black bg-opacity-30">
      <div className="modal">
        {type === "view" ? <NewTask info={task} /> : <NewTask />}
      </div>
    </main>
  );
}
