"use client";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/contexts/ModalContext";
import TaskEditor from "./TaskEditor";
import { TaskContext } from "@/contexts/TaskContext";

export default function ModalContainer() {
  const { modal, setModal } = useContext(ModalContext);
  const { setSelectedTask } = useContext(TaskContext);
  useEffect(() => {
    const handleClickOutsideTask = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const modalClass = document.querySelector(".modalClass");
      if (modalClass && !modalClass.contains(target)) {
        setModal({ ...modal, visibility: "invisible" });
        setSelectedTask(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTask);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTask);
    };
  }, [modal]);

  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-black bg-opacity-30">
      <div className="modalClass">
        <TaskEditor />
      </div>
    </main>
  );
}
