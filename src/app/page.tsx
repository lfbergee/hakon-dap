export default function Home() {
  return (
    <main className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./hakon.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-black/60 p-5 rounded-xl">
            <h1 className="mb-5 text-5xl font-bold">Navnefest for Håkon</h1>
            <p className="mb-5 text-xl">
              Vi ønsker å feire Håkon med en navnefest på Tonheim Folkehøyskole
            </p>
            <p className="text-2xl">24. februar 2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}
