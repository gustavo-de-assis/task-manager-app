"use client";

import { FilterState, TaskFilters } from "@/types";
import { ChangeEvent, ReactNode, useState } from "react";

export default function FilterComponent(props: FilterState): ReactNode {
  const [filters, setFilters] = useState<TaskFilters>({});
  const { setFilter, setShowFilter } = props;

  const handleFilterSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(filters);
    setShowFilter(false);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-row items-center w-48 h-16 bg-[#f8f8f8] absolute top-6 gap-2"
    >
      <div className="h-full ">
        <p className="text-xs">Título</p>
        <select
          name="title"
          value={filters.title}
          onChange={handleFilterSelection}
        >
          <option value={""}> --</option>
          <option value={"asc"}>A-Z</option>
          <option value={"desc"}>Z-A</option>
        </select>
      </div>
      <div className="h-full ">
        <p className="text-xs">Prazo</p>
        <select
          name="deadline"
          value={filters.deadline}
          onChange={handleFilterSelection}
        >
          <option value={""}> --</option>
          <option value={"asc"}>mais prox</option>
          <option value={"desc"}>mais longo</option>
        </select>
      </div>
      <div className="flex h-6 w-8 justify-center items-center">
        <input
          type="submit"
          value="OK"
          className="w-full h-full hover:cursor-pointer rounded border-[1px] border-black bg-zinc-300 mb-3"
        />
      </div>
    </form>
  );
}
