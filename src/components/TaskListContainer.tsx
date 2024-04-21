import Task from "./Task";
import { MdFilterAlt } from "react-icons/md";

export default function TaskListContainer() {
  return (
    <main className="flex flex-col items-center w-80 h-96 bg-[#f8f8f8] shadow-md gap-8">
      <div className="flex flex-col h-12 items-start justify-center ml-3 mt-3 w-full">
        <MdFilterAlt />
        <p className="text-[10px]">Filtros</p>
      </div>
      <section className="flex flex-col items-center w-full gap-3">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </section>
    </main>
  );
}
