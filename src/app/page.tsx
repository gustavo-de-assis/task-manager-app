import NewTaskButton from "@/components/NewTaskButton";
import TaskListContainer from "@/components/TaskListContainer";
import TaskList from "@/components/TaskListContainer";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center mt-8 mb-14">
        <h1 className="font-normal text-5xl">To Do List</h1>
      </header>
      <section className="flex flex-col items-center gap-5">
        <TaskListContainer></TaskListContainer>
        <aside className="flex flex-col items-center w-36 h-36 gap-3">
          <h2 className="font-normal text-xl">Nova Tarefa</h2>
          {/* <div className="flex justify-center items-center w-24 h-28 bg-amber-300">
            sticker
          </div> */}
          <NewTaskButton />
        </aside>
      </section>
    </main>
  );
}
