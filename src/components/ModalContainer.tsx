"use client";
import { ReactNode, useEffect } from "react";
import NewTask from "./NewTask";
import { ModalInfo } from "@/types";

export default function ModalContainer(props: ModalInfo): ReactNode {
  const { modal, setModal } = props;

  useEffect(() => {
    const handleClickOutsideTask = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const modalClass = document.querySelector(".modalClass");
      if (modalClass && !modalClass.contains(target)) {
        setModal({ visibility: "invisible", type: "" });
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTask);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTask);
    };
  }, [modal]);

  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-black bg-opacity-30">
      <div className="modalClass">
        {modal.type === "view" ? <NewTask /> : <NewTask />}
      </div>
    </main>
  );
}
