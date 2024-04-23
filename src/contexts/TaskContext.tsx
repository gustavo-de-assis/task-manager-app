"use client";

import { TaskModel } from "@/types";
import { createContext, useEffect, useMemo, useState } from "react";

type TaskContextType = {
  selectedTask: TaskModel | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskModel | null>>;
};

export const TaskContext = createContext({} as TaskContextType);

export function TaskProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [selectedTask, setSelectedTask] = useState<TaskModel | null>(null);
  useEffect(() => {}, [selectedTask]);

  const value = useMemo(
    () => ({ selectedTask, setSelectedTask }),
    [selectedTask]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
