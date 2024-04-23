import { TbEyeSearch, TbTrash } from "react-icons/tb";
import IconButton from "./IconButton";
import { ModalInfo, TaskContainerProps } from "@/types";
import { ReactNode } from "react";

export default function TaskContainer(props: TaskContainerProps): ReactNode {
  const { modal, task } = props;
  const deadlineDate = new Date(props.task.deadline);
  const formattedDeadline = deadlineDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const modalSetter = () => {
    modal.setModal({ visibility: "visible", type: "view" });
  };

  return (
    <main className="flex flex-row justify-between items-center w-11/12 min-h-5 max-h-5 border-b-2 border-black relative">
      <span className="flex absolute left-1 gap-1">
        <IconButton Icon={TbEyeSearch} handler={modalSetter} size={20} />
        <h2 className="text-sm ml-1">{task.title}</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs">{formattedDeadline}</h2>
        <TbTrash />
      </span>
    </main>
  );
}
