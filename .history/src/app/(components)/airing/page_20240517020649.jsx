import AnimateCard from '@/app/animateCard/animateCard';
import React from 'react'
import styles from "../../page.module.css";


export default async function Airing() {
    async function airingAnimate(){

        let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`);
        response =await response.json()
        return response.data     
    
    
        }
    
        let data = await airingAnimate()
        console.log(data)
  return (
    <main className={styles.main}>

    <div className="row justify-content-center align-items-center g-2">
    {data.map(data=>
        <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
    )}
</div>
</main>
  )
}
