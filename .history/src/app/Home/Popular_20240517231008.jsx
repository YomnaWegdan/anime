
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
    console.log(data)

    const sorted = data?.sort((a,b) => {
        return b.score - a.score
    })

  return (
    <></>
    <div className="row justify-content-center align-items-center g-3 mt-5">
    {data.map(data=>
        <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
    )}
    </div>

    <div className="  w-25 min-vh-100 fixed-top">
    <div className=''>
    {sorted?.slice(0,5).map((anime) => 
        <Link href={`/${anime.mal_id}`} key={anime.mal_id} className='h-20'> 

        <div className='animate'>
            <Image width={280} height={400} src={anime.images.jpg.large_image_url} alt="" className=' w-100 rounded-3 ' />
        </div>
        </Link>
    )}
    
    </div>

</div>
)
}



