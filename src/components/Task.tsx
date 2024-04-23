import { TbEyeSearch, TbTrash } from "react-icons/tb";
import IconButton from "./IconButton";

interface Task {
  title: string;
  description: string;
  deadline: string;
}

type TaskProps = {
  task: Task;
  modalHandler: (
    visibility: string,
    newModalType: string,
    taskInfo: Task
  ) => void;
};

export default function Task({ task, modalHandler }: Readonly<TaskProps>) {
  const deadlineDate = new Date(task.deadline);
  const formattedDeadline = deadlineDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <main className="flex flex-row justify-between items-center w-11/12 min-h-5 max-h-5 border-b-2 border-black relative">
      <span className="flex absolute left-1 gap-1">
        <IconButton
          Icon={TbEyeSearch}
          handler={() => modalHandler("visible", "view", task)}
          size={20}
        />
        <h2 className="text-sm ml-1">{task.title}</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs">{formattedDeadline}</h2>
        <TbTrash />
      </span>
    </main>
  );
}
