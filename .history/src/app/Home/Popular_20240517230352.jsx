
import React from 'react'
import AnimateCard from '../animateCard/animateCard';
import Link from 'next/link';

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
    <div className="row justify-content-center align-items-center g-3 mt-5">
    {data.map(data=>
        <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
    )}

    <div className="row justify-content-center align-items-center g-3 mt-5">
    <div className=' col-lg-4'>
    {sorted?.slice(0,5).map((anime) => 
        <Link href={`/${id}`} key={sorted.mal_id}> 

        <div className='animate'>
            <Imag width={280} height={400} src={images} alt="" className=' w-100 rounded-3 ' />
        </div>
        </Link>
    )}
    
    </div>
    </div>

</div>
)
}



