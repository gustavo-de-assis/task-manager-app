import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

interface NewTaskProps {
  modalHandler: (visibility: string, newModalType: string) => void;
}

export default function NewTaskButton() {
  const { setModal } = useContext(ModalContext);

  return (
    <main
      className="flex justify-center items-center w-28 h-28 bg-cover bg-center text-5xl font-light"
      style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
      onClick={() => setModal({ visibility: "visible", type: "new" })}
    >
      +
    </main>
  );
}
