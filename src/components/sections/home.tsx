const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center px-4 text-center"
    >
      <picture>
        <img
          src="/js.svg"
          className="max-h-32 bg-amber-50 rounded-md border-2"
          alt="js.svg logo"
        />
      </picture>
      <h1 className="text-5xl font-bold mt-4">Bienvenidos a mi portafolio</h1>
      <p className="text-lg mt-2">
        Soy Jefferson García, desarrollador de software.
      </p>
    </section>
  );
};

export default Home;
