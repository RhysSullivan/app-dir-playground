import { Suspense } from "react";
import { Auth } from "../components/auth";

export const dynamic = "auto";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch(
    "http://localhost:3000/api/ping?slug=" + params.slug,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const json = await data.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Renderered at {json.time}
        {}
      </h1>
      <h2>Slug is {params.slug}</h2>
      {
        // random number, if we are caching the html it shouldnt change
        Math.random() * 100000
      }
      <Suspense fallback={<div>Loading...</div>}>
        <Auth />
      </Suspense>
    </main>
  );
}
