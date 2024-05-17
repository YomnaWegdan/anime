import React from 'react'

export default async function Airing() {
    async function popularAnimate(){

        let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
        response =await response.json()
        return response.data     
    
    
        }
    
        let data = await popularAnimate('bypopularity')
        console.log(data)
  return (
    <div>
      
    </div>
  )
}
