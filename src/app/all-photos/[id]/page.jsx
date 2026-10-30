import React from "react";
import { notFound } from "next/navigation";

const DATA_URL =
  "https://ai-image-generation-gallery-beta.vercel.app/data.json";

async function getPhotos() {
  const res = await fetch(DATA_URL, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photos data");
  }

  return res.json();
}

// Generate static pages for available photo IDs
export async function generateStaticParams() {
  const photos = await getPhotos();

  return photos.map((photo) => ({
    id: String(photo.id),
  }));
}

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const photos = await getPhotos();

  const photo = photos.find((item) => String(item.id) === String(id));

  if (!photo) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">{photo.title}</h1>

      <p className="mb-6 text-gray-600">{photo.prompt}</p>

    
    </main>
  );
};

export default PhotoDetailsPage;