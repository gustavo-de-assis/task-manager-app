"use client";

import { TbEyeSearch, TbTrash } from "react-icons/tb";
import IconButton from "./IconButton";
import { TaskItemProps } from "@/types";
import { ReactNode, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";
import axios from "axios";
import Swal from "sweetalert2";

export default function TaskItem(props: Readonly<TaskItemProps>): ReactNode {
  const { title, deadline, id } = props;
  const { setModal } = useContext(ModalContext);
  const { setSelectedTask } = useContext(TaskContext);

  const deadlineDate = new Date(deadline);
  const formattedDeadline = deadlineDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  async function deleteRequest() {
    const url = `http://localhost:4000/tasks/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  }

  async function deleteTask() {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter a ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRequest();
        Swal.fire({
          title: "Pronto!",
          text: "Sua tarefa foi deletada.",
          icon: "success",
        });
      }
    });
  }

  return (
    <main className="flex flex-row justify-between items-center w-11/12 min-h-5 max-h-5 border-b-2 border-black relative">
      <span className="flex absolute left-1 gap-1">
        <IconButton
          Icon={TbEyeSearch}
          handler={() => {
            setModal({ visibility: "visible", type: "view" });
            setSelectedTask({ ...props.task, deadline: formattedDeadline });
          }}
          size={20}
        />
        <h2 className="text-sm ml-1">{title}</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs">{formattedDeadline}</h2>
        <IconButton
          Icon={TbTrash}
          handler={() => {
            () => update;
            deleteTask();
          }}
          size={20}
        />
      </span>
    </main>
  );
}
