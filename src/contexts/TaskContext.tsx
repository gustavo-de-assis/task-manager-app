"use client";

import { TaskModel } from "@/types";
import { createContext, useEffect, useMemo, useState } from "react";

type TaskContextType = {
  task: TaskModel | null;
  setTask: React.Dispatch<React.SetStateAction<TaskModel | null>>;
};

export const TaskContext = createContext({} as TaskContextType);

export function TaskProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [task, setTask] = useState<TaskModel | null>(null);
  useEffect(() => {}, [task]);

  const value = useMemo(() => ({ task, setTask }), [task]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
