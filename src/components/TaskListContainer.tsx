import Task from "./Task";
import { MdFilterAlt } from "react-icons/md";

interface openModalProps {
  modalHandler: (visibility: string, newModalType: string) => void;
}

export default function TaskListContainer({
  modalHandler,
}: Readonly<openModalProps>) {
  return (
    <main className="flex flex-col items-center w-80 h-96 bg-[#f8f8f8] shadow-md gap-8">
      <div className="flex flex-col h-12 items-start justify-center ml-3 mt-3 w-full">
        <MdFilterAlt />
        <p className="text-xs">Filtros</p>
      </div>
      <section className="flex flex-col items-center w-full h-3/5 overflow-y-scroll gap-3 pt-1">
        <Task
          title="Titulo"
          deadline="23/06/1992"
          modalHandler={modalHandler}
        />
      </section>
    </main>
  );
}
