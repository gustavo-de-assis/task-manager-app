export default function Modal() {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen bg-black bg-opacity-30">
      <section
        className="flex justify-center items-center w-80 h-80 bg-cover bg-center text-5xl font-light"
        style={{ backgroundImage: `url('../../assets/images/post_it.png')` }}
      >
        Minha tarefa
      </section>
    </main>
  );
}
