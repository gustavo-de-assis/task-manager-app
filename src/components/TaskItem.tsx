"use client";

import { TbEyeSearch, TbTrash } from "react-icons/tb";
import IconButton from "./IconButton";
import { TaskModel } from "@/types";
import { ReactNode, useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";
import axios from "axios";
import Swal from "sweetalert2";

export default function TaskItem(props: Readonly<TaskModel>): ReactNode {
  const { title, deadline, id } = props;
  const { setModal } = useContext(ModalContext);
  const { setSelectedTask } = useContext(TaskContext);

  const deadlineDate = new Date(deadline);
  const formattedDeadline = deadlineDate.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  async function deleteTask() {
    const url = `http://localhost:4000/tasks/${id}`;
    try {
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
          axios.delete(url);
          Swal.fire({
            title: "Pronto!",
            text: "Sua tarefa foi deletada.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado!",
        footer: error.response.data,
      });
    }
  }

  return (
    <main className="flex flex-row justify-between items-center w-11/12 min-h-5 max-h-5 sm:min-h-6 sm:max-h-6 lg:min-h-10 lg:max-h-10 border-b-2 border-black relative">
      <span className="flex absolute left-1 gap-1">
        <IconButton
          Icon={TbEyeSearch}
          handler={() => {
            setModal({ visibility: "visible", type: "view" });
            setSelectedTask({ ...props, deadline: formattedDeadline });
          }}
          size={20}
        />
        <h2 className="text-sm sm:text-md lg:text-xl ml-1">{title}</h2>
      </span>
      <span className="flex absolute right-1 gap-1">
        <h2 className="text-xs sm:text-sm lg:text-xl">{formattedDeadline}</h2>
        <IconButton
          Icon={TbTrash}
          handler={() => {
            deleteTask();
          }}
          size={20}
        />
      </span>
    </main>
  );
}
