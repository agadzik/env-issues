import Image from "next/image";

export default function Home() {
  const secret = process.env.GADZIK_SECRET;
  const publicValue = process.env.GADZIK_PUBLIC;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{secret ?? "no secret defined"}</p>
      <p>{publicValue ?? "no public value defined"}</p>
    </main>
  );
}
