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
    <div className="row justify-content-center align-items-center g-2">
        <h1>{details.title}</h1>

        <div className=" col-lg-4" key={details.mal_id}>
            <div className='animate'>
                <Image width={280} height={400} src={details.images.jpg.large_image_url} alt="" className=' w-100 rounded-3 ' />
            </div>
        </div>
        <div className=" col-lg-8" key={details.mal_id}>
        <div className="anime-details">
        <p><span>Aired:</span><span>{aired?.string}</span></p>
        <p><span>Rating:</span><span>{rating}</span></p>
        <p><span>Rank:</span><span>{rank}</span></p>
        <p><span>Score:</span><span>{score}</span></p>
        <p><span>Scored By:</span><span>{scored_by}</span></p>
        <p><span>Popularity:</span><span>{popularity}</span></p>
        <p><span>Status:</span><span>{status}</span></p>
        <p><span>Source:</span><span>{source}</span></p>
        <p><span>Season:</span><span>{season}</span></p>
        <p><span>Duration:</span><span>{duration}</span></p>
    </div>
        </div>

        
    </div>
    </div>
  )
}
