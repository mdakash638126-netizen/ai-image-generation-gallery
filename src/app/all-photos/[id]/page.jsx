import React from 'react';

const PhotoesDeatliesPage = async({params}) => {
    const {id} = await params;
    const res =  await fetch('https://pixgen-eta.vercel.app/data.json');
    const datas = await res.json();
    const data = datas.find(p => p.id == id)


    return (
        <div>
          <h1>{data?.title}</h1>
         <p>{data.prompt}</p>
        </div>
    );
};

export default PhotoesDeatliesPage;