"use client";

import { ModalType } from "@/types";
import { createContext, useEffect, useMemo, useState } from "react";

type ModalContextType = {
  modal: ModalType | null;
  setModal: React.Dispatch<React.SetStateAction<ModalType | null>>;
};

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [modal, setModal] = useState<ModalType | null>(null);
  useEffect(() => {}, [modal]);

  const value = useMemo(() => ({ modal, setModal }), [modal]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
