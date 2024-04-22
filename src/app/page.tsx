import Modal from "@/components/Modal";
import NewTaskButton from "@/components/NewTaskButton";
import TaskListContainer from "@/components/TaskListContainer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="absolute z-10">
        <Modal />
      </section>
      <div>
        <header className="flex justify-center pt-8 mb-14">
          <h1 className="font-normal text-5xl">To Do List</h1>
        </header>
        <section className="flex flex-col items-center gap-5">
          <TaskListContainer></TaskListContainer>
          <aside className="flex flex-col items-center w-36 h-36 gap-3">
            <h2 className="font-normal text-xl">Nova Tarefa</h2>
            <NewTaskButton />
          </aside>
        </section>
      </div>
    </main>
  );
}
