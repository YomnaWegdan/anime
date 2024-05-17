import React from 'react'

export default async function page() {
    async function popularAnimate(){

        let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
        response =await response.json()
        return response.data     
        }
    
        let data = await popularAnimate()
        console.log(data)
    
      return (
        <div className="row justify-content-center align-items-center g-2">
        {data.map(data=>
            <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
        )}
    </div>
    )
    }