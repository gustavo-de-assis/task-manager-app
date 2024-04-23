import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";
import { useContext } from "react";

export default function NewTaskButton() {
  const { setModal } = useContext(ModalContext);
  const { setSelectedTask, selectedTask } = useContext(TaskContext);

  return (
    <main
      className="flex justify-center items-center w-28 h-28 bg-cover bg-center text-5xl font-light"
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
