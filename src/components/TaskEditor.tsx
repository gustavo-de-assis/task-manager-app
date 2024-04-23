"use client";

import { useContext, useEffect, useState } from "react";
import IconButton from "./IconButton";
import { BsSendCheck } from "react-icons/bs";
import axios from "axios";
import { TaskModel } from "@/types";
import { ModalContext } from "@/contexts/ModalContext";
import { TaskContext } from "@/contexts/TaskContext";

type TaskParams = Omit<TaskModel, "id">;

export default function TaskEditor() {
  const [taskInfo, setTaskInfo] = useState<TaskParams>({
    title: "",
    description: "",
    deadline: "",
  });
  const { modal } = useContext(ModalContext);
  const { selectedTask } = useContext(TaskContext);

  useEffect(() => {
    if (selectedTask !== null && modal.type === "edit") {
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
  }, [selectedTask]);

  async function formHandler(
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/tasks";
      await axios.post(url, taskInfo);
    } catch (error) {
      console.log(error.response);
    }
    console.log("Informações da tarefa:", taskInfo);
    console.log("Informações Selecionado: ", selectedTask);
  }

  return (
    <main
      className="w-80 h-80 bg-cover bg-center font-light relative"
      style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
    >
      <form className="absolute top-5 left-9 w-64" onSubmit={formHandler}>
        <input
          className="h-16 w-full mb-6 text-center bg-transparent font-medium text-2xl"
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
          className="flex flex-wrap h-32 w-full mb-3 text-start bg-transparent font-normal text-md px-1 resize-none"
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
    </main>
  );
}
