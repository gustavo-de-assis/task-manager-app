"use client";

import { useContext, useEffect, useState } from "react";

import { BsSendCheck } from "react-icons/bs";
import { TbPencilMinus } from "react-icons/tb";

import { TaskModel } from "@/types";
import IconButton from "./IconButton";
import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";
import axios from "axios";
import Swal from "sweetalert2";

type TaskParams = Omit<TaskModel, "id">;

export default function TaskEditor() {
  const [taskInfo, setTaskInfo] = useState<TaskParams>({
    title: "",
    description: "",
    deadline: "",
  });
  const { modal, setModal } = useContext(ModalContext);
  const { selectedTask } = useContext(TaskContext);

  useEffect(() => {
    if (
      selectedTask !== null &&
      (modal.type === "edit" || modal.type === "view")
    ) {
      setTaskInfo({
        title: selectedTask?.title,
        description: selectedTask?.description,
        deadline: selectedTask?.deadline,
      });
    } else {
      setTaskInfo({
        title: "",
        description: "",
        deadline: "",
      });
    }
  }, [selectedTask, modal]);

  async function formHandler(
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (modal.type === "new") {
      await createTask();
      setModal({ ...modal, visibility: "invisible" });
    } else if (modal.type === "edit") {
      await updateTask();
      setModal({ ...modal, visibility: "invisible" });
    }
  }

  async function updateTask(): Promise<void> {
    try {
      const url = `http://localhost:4000/tasks/${selectedTask?.id}`;
      await axios.put(url, taskInfo);
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Tarefa Atualizada!",
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

  async function createTask(): Promise<void> {
    try {
      const url = "http://localhost:4000/tasks";
      await axios.post(url, taskInfo);
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Tarefa Criada!",
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
    <main
      className="w-80 lg:w-96 h-80 lg:h-96 bg-cover bg-center font-light relative"
      style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
    >
      {modal.type === "view" ? (
        <section className="absolute top-5 lg:top-8 left-9 lg:left-11 w-64 lg:w-72">
          <div className="h-16 w-full mb-6 text-center bg-transparent font-medium text-2xl lg:text-5xl">
            {selectedTask?.title}
          </div>
          <div className="flex flex-wrap h-32 lg:h-44 w-full mb-3 text-start bg-transparent font-normal text-md lg:text-2xl px-1">
            {selectedTask?.description}
          </div>
          <div className="flex justify-between lg:text-xl">
            <div>{selectedTask?.deadline}</div>
            <div className="h-7 w-7 rounded mr-3">
              <IconButton
                Icon={TbPencilMinus}
                handler={() => setModal({ ...modal, type: "edit" })}
                size={20}
              />
            </div>
          </div>
        </section>
      ) : (
        <form
          className="absolute top-5 lg:top-8 left-9 lg:left-11 w-64 lg:w-72"
          onSubmit={formHandler}
        >
          <input
            className="h-16 w-full mb-6 text-center bg-transparent font-medium text-2xl lg:text-5xl"
            type="text"
            maxLength={20}
            placeholder="#Título"
            value={taskInfo.title}
            onChange={(e) => {
              setTaskInfo({
                ...taskInfo,
                title: e.target.value,
              });
            }}
            required
          />
          <textarea
            className="flex flex-wrap h-32 lg:h-44 w-full mb-3 text-start bg-transparent font-normal text-md lg:text-2xl px-1 resize-none"
            rows={3}
            cols={50}
            maxLength={200}
            placeholder="#Descrição da tarefa"
            value={taskInfo.description}
            onChange={(e) => {
              setTaskInfo({
                ...taskInfo,
                description: e.target.value,
              });
            }}
            required
          />
          <div className="flex justify-between">
            <input
              className="bg-transparent"
              type="date"
              alt="prazo"
              value={taskInfo.deadline}
              onChange={(e) => {
                setTaskInfo({
                  ...taskInfo,
                  deadline: e.target.value,
                });
              }}
            />
            <div className="h-7 w-7 rounded mr-3">
              <IconButton
                Icon={BsSendCheck}
                handler={() => formHandler}
                size={20}
              />
            </div>
          </div>
        </form>
      )}
    </main>
  );
}
