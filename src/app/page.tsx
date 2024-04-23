"use client";

import ModalContainer from "@/components/ModalContainer";
import Modal from "@/components/ModalContainer";
import NewTaskButton from "@/components/NewTaskButton";
import TaskListContainer from "@/components/TaskListContainer";
import { ModalType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState<ModalType>({
    visibility: "invisible",
    type: "view",
  });

  const modalHandler = (visibility: string, type: string) => {
    setModal({
      visibility,
      type,
    });
  };

  return (
    //APP
    <main className="w-full h-full">
      {/*MODAL*/}
      <section className={`absolute z-10 ${modal.visibility}`}>
        <ModalContainer modal={modal} setModal={setModal} />
      </section>

      {/*CONTENT*/}
      <div className={modal.visibility === "visible" ? `filter blur-sm` : ""}>
        <header className="flex justify-center pt-8 mb-14">
          <h1 className="font-normal text-5xl">To Do List</h1>
        </header>
        <section className="flex flex-col items-center gap-5">
          {/*CONTAINER DE TAREFAS*/}
          <TaskListContainer modalHandler={modalHandler} />

          {/*BOTÃO NOVA TAREFA */}
          <aside className="flex flex-col items-center w-36 h-36 gap-3">
            <h2 className="font-normal text-xl">Nova Tarefa</h2>
            <NewTaskButton modalHandler={modalHandler} />
          </aside>
        </section>
      </div>
    </main>
  );
}
