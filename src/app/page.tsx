"use client";

import ModalContainer from "@/components/ModalContainer";
import NewTaskButton from "@/components/NewTaskButton";
import TaskListContainer from "@/components/TaskListContainer";
import { ModalContext } from "@/contexts/ModalContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { modal } = useContext(ModalContext);

  useEffect(() => {}, [modal]);

  return (
    //APP
    <main className="w-full h-full">
      {/*MODAL*/}
      <section className={`absolute z-10 ${modal.visibility}`}>
        <ModalContainer />
      </section>

      {/*CONTENT DESKTOP*/}

      <div
        className={
          modal.visibility === "visible"
            ? `filter blur-sm hidden lg:inline`
            : "hidden lg:inline"
        }
      >
        <section className="flex flex-row items-center justify-evenly gap-5">
          {/*BOTÃO NOVA TAREFA */}
          <aside className="flex flex-col items-center justify-center w-64 h-64 gap-3 ml-12">
            <h2 className="font-normal text-3xl">Nova Tarefa</h2>
            <NewTaskButton />
          </aside>

          {/*CONTAINER DE TAREFAS*/}
          <section className="flex flex-col items-center w-full h-full">
            <header className="flex justify-center pt-8 mb-14">
              <h1 className="font-normal text-5xl sm:text-6xl lg:text-8xl">
                To Do List
              </h1>
            </header>
            <TaskListContainer />
          </section>
        </section>
      </div>

      {/*CONTENT MOBILE*/}

      <div
        className={
          modal.visibility === "visible"
            ? `filter blur-sm lg:hidden`
            : "lg:hidden"
        }
      >
        <header className="flex justify-center pt-8 mb-14">
          <h1 className="font-normal text-5xl sm:text-6xl">To Do List</h1>
        </header>
        <section className="flex flex-col items-center gap-5">
          {/*CONTAINER DE TAREFAS*/}
          <TaskListContainer />

          {/*BOTÃO NOVA TAREFA */}
          <aside className="flex flex-col items-center w-36 h-36 gap-3">
            <h2 className="font-normal text-xl sm:text-2xl">Nova Tarefa</h2>
            <NewTaskButton />
          </aside>
        </section>
      </div>
    </main>
  );
}
