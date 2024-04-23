import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";
import { useContext } from "react";

export default function NewTaskButton() {
  const { setModal } = useContext(ModalContext);
  const { setSelectedTask, selectedTask } = useContext(TaskContext);

  return (
    <main
      className="flex justify-center items-center w-28 lg:w-36 h-28 lg:h-36 bg-cover bg-center text-5xl lg:text-6xl font-light hover:cursor-pointer hover:opacity-80"
      style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
      onClick={() => {
        setSelectedTask(null);
        setModal({ visibility: "visible", type: "new" });
      }}
    >
      +
    </main>
  );
}
