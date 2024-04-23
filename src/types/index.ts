type TaskModel = {
  id: number;
  title: string;
  description: string;
  deadline: string;
};

type TaskInfo = Omit<TaskModel, "id">;

type ModalInfo = {
  visibility: string;
  type: string;
};
