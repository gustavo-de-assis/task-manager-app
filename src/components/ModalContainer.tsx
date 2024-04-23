"use client";
import { useContext, useEffect } from "react";
import NewTask from "./TaskEditor";
import { ModalContext } from "@/contexts/ModalContext";
import TaskEditor from "./TaskEditor";

export default function ModalContainer() {
  const { modal, setModal } = useContext(ModalContext);
  useEffect(() => {
    const handleClickOutsideTask = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const modalClass = document.querySelector(".modalClass");
      if (modalClass && !modalClass.contains(target)) {
        setModal({ ...modal, visibility: "invisible" });
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
        {modal.type === "view" ? <TaskEditor /> : <TaskEditor />}
      </div>
    </main>
  );
}
