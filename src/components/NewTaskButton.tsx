interface NewTaskProps {
  modalHandler: (visibility: string, newModalType: string) => void;
}

export default function NewTaskButton({
  modalHandler,
}: Readonly<NewTaskProps>) {
  return (
    <main
      className="flex justify-center items-center w-28 h-28 bg-cover bg-center text-5xl font-light"
      style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
      onClick={() => modalHandler("visible", "newTask")}
    >
      +
    </main>
  );
}
