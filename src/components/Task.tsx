import { TbEyeSearch, TbPencilMinus, TbTrash } from "react-icons/tb";

type TaskProps = {
  title: string;
  deadline: string;
};

export default function Task(props: TaskProps) {
  const { title, deadline } = props;

  return (
    <main className="flex flex-row justify-between items-center w-11/12 min-h-5 max-h-5 border-b-2 border-black relative">
      <span className="flex absolute left-1 gap-1">
        <TbEyeSearch />
        <h2 className="text-sm ml-1">{title}Título tarefa</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs">{deadline} 24/12/2024</h2>
        <TbTrash />
      </span>
    </main>
  );
}
