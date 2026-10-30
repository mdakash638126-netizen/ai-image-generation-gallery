import PhotoCard from '@/component/PhotoCard';
import React from 'react';

const AllPhotoesPage = async() => {
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
    const topData = data.slice(0, 15);


  

    return (
        <div>
            <h2 className='font-bold text-2xl m-3'> All Photoes</h2>
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {topData.map((item) => (
                    <PhotoCard key={item.id} item={item} />
                  ))}
                </div>
        </div>
    );
};

export default AllPhotoesPage;