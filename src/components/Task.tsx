import { TbEyeSearch, TbTrash } from "react-icons/tb";
import IconButton from "./IconButton";

type TaskProps = {
  title: string;
  deadline: string;
  modalHandler: (visibility: string, newModalType: string) => void;
};

export default function Task({
  title,
  deadline,
  modalHandler,
}: Readonly<TaskProps>) {
  const deadlineDate = new Date(deadline);
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
          handler={() => modalHandler("visible", "view")}
          size={20}
        />
        <h2 className="text-sm ml-1">{title}</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs">{formattedDeadline}</h2>
        <TbTrash />
      </span>
    </main>
  );
}
