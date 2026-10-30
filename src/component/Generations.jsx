import React, { Suspense } from "react";
import PhotoCard from "./PhotoCard";

const GenerationList = async () => {
  const res = await fetch(
    "https://ai-image-generation-gallery-beta.vercel.app/data.json",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch generations data");
  }

  const data = await res.json();
  const topData = data.slice(0, 9);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {topData.map((item) => (
        <PhotoCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const Generations = () => {
  return (
    <section>
      <h1 className="my-5 text-2xl font-bold">Top Generations</h1>

      <Suspense fallback={<p>Loading generations...</p>}>
        <GenerationList />
      </Suspense>
    </section>
  );
};

export default Generations;