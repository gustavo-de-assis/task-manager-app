import { Dispatch, SetStateAction } from "react";

export type TaskModel = {
  id: number;
  title: string;
  description: string;
  deadline: string;
};

export type TaskInfo = Omit<TaskModel, "id" | "description">;

export type ModalType = {
  visibility: string;
  type: string;
};

export type ModalInfo = {
  modal: ModalType;
  setModal: Dispatch<SetStateAction<ModalType>>;
};

export type TaskItemProps = {
  task: TaskModel;
  deleteTask: () => void;
};

export type TaskContainerProps = {
  task: TaskModel;
  modal: ModalInfo;
};

export type TaskFilters = {
  title?: "asc" | "desc";
  deadline?: "asc" | "desc";
};

export type FilterState = {
  filter: TaskFilters;
  setFilter: Dispatch<SetStateAction<TaskFilters>>;
  setShowFilter: Dispatch<SetStateAction<boolean>>;
};
