import Image from "next/image";

export default function Home() {
  const secret = process.env["gadzik-secret"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {secret ?? "no secret defined"}
    </main>
  );
}
