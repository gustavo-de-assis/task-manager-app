"use client";

import Modal from "@/components/Modal";
import NewTaskButton from "@/components/NewTaskButton";
import TaskListContainer from "@/components/TaskListContainer";
import { useState } from "react";

interface ModalType {
  visible: string;
  type: string;
}

export default function Home() {
  const [modalType, setModalType] = useState<ModalType>({
    visible: "invisible",
    type: "view",
  });

  const modalHandler = (visibility: string, newModalType: string) => {
    setModalType({
      visible: visibility,
      type: newModalType,
    });
  };

  return (
    <main className="w-full h-full">
      <section className={`absolute z-10 ${modalType.visible}`}>
        <Modal modalHandler={modalHandler} type={modalType.type} />
      </section>
      <div className={modalType.visible === "visible" ? `filter blur-sm` : ""}>
        <header className="flex justify-center pt-8 mb-14">
          <h1 className="font-normal text-5xl">To Do List</h1>
        </header>
        <section className="flex flex-col items-center gap-5">
          <TaskListContainer modalHandler={modalHandler} />
          <aside className="flex flex-col items-center w-36 h-36 gap-3">
            <h2 className="font-normal text-xl">Nova Tarefa</h2>
            <NewTaskButton modalHandler={modalHandler} />
          </aside>
        </section>
      </div>
    </main>
  );
}
