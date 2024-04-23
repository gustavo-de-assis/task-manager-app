"use client";

import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { MdFilterAlt } from "react-icons/md";
import axios from "axios";
import { TaskFilters, TaskModel } from "@/types";
import IconButton from "./IconButton";
import FilterComponent from "./FilterComponent";

export default function TaskListContainer() {
  const [taskList, setTaskList] = useState<TaskModel[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<TaskFilters>({});

  useEffect(() => {
    const queryString = setQueryParams();
    const URL = `http://localhost:4000/tasks`;
    axios
      .get(URL + queryString)
      .then((ans) => {
        setTaskList(ans.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [showFilters, taskList]);

  function setQueryParams() {
    const queryParams = [];
    if (filters.title) {
      queryParams.push(`title=${encodeURIComponent(filters.title)}`);
    }
    if (filters.deadline) {
      queryParams.push(`deadline=${encodeURIComponent(filters.deadline)}`);
    }
    if (queryParams.length > 0) {
      return "?" + queryParams.join("&");
    }
    return "";
  }

  function toggleShowFilters() {
    setShowFilters(!showFilters);
  }

  return (
    <main className="flex flex-col items-center w-80 h-96 bg-[#f8f8f8] shadow-md gap-8">
      <div className="flex flex-col h-12 items-start justify-center ml-3 mt-3 w-full relative">
        <IconButton Icon={MdFilterAlt} handler={toggleShowFilters} size={20} />
        {showFilters ? (
          <FilterComponent
            filter={filters}
            setFilter={setFilters}
            setShowFilter={setShowFilters}
          />
        ) : (
          <></>
        )}
        <p className="text-xs">Filtros</p>
      </div>
      <section className="flex flex-col items-center w-full h-3/5 overflow-y-scroll gap-3 pt-1">
        {taskList.length !== 0 ? (
          taskList.map((task, idx) => (
            <TaskItem
              deadline={task.deadline}
              description={task.description}
              title={task.title}
              id={task.id}
              key={idx}
            />
          ))
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
