import { useEffect, useState } from "react";
import Task from "./Task";
import { MdFilterAlt } from "react-icons/md";
import axios from "axios";

interface openModalProps {
  modalHandler: (visibility: string, newModalType: string) => void;
}

interface Task {
  title: string;
  description: string;
  deadline: string;
}

export default function TaskListContainer({
  modalHandler,
}: Readonly<openModalProps>) {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const URL = "http://localhost:4000/tasks";
    axios
      .get(URL)
      .then((ans) => {
        setTaskList(ans.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  return (
    <main className="flex flex-col items-center w-80 h-96 bg-[#f8f8f8] shadow-md gap-8">
      <div className="flex flex-col h-12 items-start justify-center ml-3 mt-3 w-full">
        <MdFilterAlt />
        <p className="text-xs">Filtros</p>
      </div>
      <section className="flex flex-col items-center w-full h-3/5 overflow-y-scroll gap-3 pt-1">
        {taskList.map((task, idx) => (
          <Task task={task} key={idx} modalHandler={modalHandler} />
        ))}
      </section>
    </main>
  );
}
