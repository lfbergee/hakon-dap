import { kv } from "@vercel/kv";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

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
              Vi ønsker å feire Håkon med en navnefest på Toneheim Folkehøyskole
            </p>
            <p className="text-3xl mb-5">24. februar, 13:00</p>

            <p className="text-xl mb-5">Det blir servert lunsj og kaker</p>

            <p className="text-xl">
              Gi beskjed til Monica (40 24 34 62) eller Leiv Fredrik (452 41
              510) innen 24. januar med hvor mange som kommer og evntuelle
              allergier
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
