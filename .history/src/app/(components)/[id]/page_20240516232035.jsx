import Image from 'next/image'
import React from 'react'

export default async function animateDetails({params}) {
    let id = params.id

    async function getDetails() {
        let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        response =await response.json()
        return response.data     
    }
    let details = await getDetails()
  return (
    <div>
    <h1 className='h3 py-5 text-dark'>{details.title}</h1>

    <div className="row justify-content-between align-items-center bg-white shadow p-5">
        <div className=" col-lg-6" key={details.mal_id}>
            <div className='animate'>
                <Image width={280} height={400} src={details.images.jpg.large_image_url} alt="" className=' w-75 rounded-3 ' />
            </div>
        </div>
        <div className=" col-lg-6">
            <div className="anime-details">
            <p><span>Aired:</span><span> {details.aired?.string}</span></p>
            <p><span>Rating:</span><span> {details.rating}</span></p>
            <p><span>Rank:</span><span> {details.rank}</span></p>
            <p><span>Score:</span><span> {details.score}</span></p>
            <p><span>Scored By:</span><span> {details.scored_by}</span></p>
            <p><span>Popularity:</span><span> {details.popularity}</span></p>
            <p><span>Status:</span><span> {details.status}</span></p>
            <p><span>Source:</span><span> {details.source}</span></p>
            <p><span>Season:</span><span> {details.season}</span></p>
            <p><span>Duration:</span><span> {details.duration}</span></p>
            </div>
        </div>
        <div className=" col-lg-12">
        <p></p>
</div>

        
    </div>
    </div>
  )
}
