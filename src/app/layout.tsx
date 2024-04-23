import type { Metadata } from "next";
import { M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "@/contexts/TaskContext";
import { ModalProvider } from "@/contexts/ModalContext";

const mPlus = M_PLUS_Code_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager App",
  description: "Task management app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mPlus.className}>
        <ModalProvider>
          <TaskProvider>{children}</TaskProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
