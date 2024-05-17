import React from 'react'
import AnimateCard from '../animateCard/animateCard';
import Link from 'next/link';
import Image from 'next/image';

export default async function Popular() {

  async function popularAnimate(){

    let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
    response =await response.json()
    return response.data     
    }

    let data = await popularAnimate()
    console.log('ddd',data.score)

    const sorted = data?.sort((a,b) => {
        return b.score - a.score
    })

    console.log(sorted)
  return (
    <div className='mt-5'>
    <div className="row justify-content-center align-items-center g-3 mt-5">
    {data.map(data=>
        <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
    )}
</div>
   
</div>
)
}



