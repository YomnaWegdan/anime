import React from 'react'

export default async function page() {
    async function upcomingAnimate(){

        let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming`);
        response =await response.json()
        return response.data     
        }
    
        let data = await upcomingAnimate()
        console.log(data)
    
      return (
        <div className="row justify-content-center align-items-center g-2">
        {data.map(data=>
            <Anim data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
        )}
    </div>
    )
    }