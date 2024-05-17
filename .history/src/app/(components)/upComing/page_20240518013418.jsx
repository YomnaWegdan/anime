import AnimateCard from '@/app/animateCard/animateCard';
import React from 'react'

export default async function page() {
    async function upcomingAnime(){

        let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming`,{
            next:{
                revalidate:300
            }
        });
        response =await response.json()
        return response.data     
        }
    
        let data = await upcomingAnime()
        console.log(data)
    
      return (

        <div className="row justify-content-center align-items-center g-3 mt-5">
        {data.map(data=>
            <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
        )}
    </div>
    )
    }