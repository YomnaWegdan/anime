import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function animateDetails({params}) {
    let id = params.id

    async function getDetails() {
        let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        response =await response.json()
        return response.data     
    }
    let details = await getDetails()

    async function getCharacters()  {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
        response = await response.json()
        return response.data     
    }

  return (
    <div>
    <h1 className='h3 py-5 dark-color'>{details.title}</h1>

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
            <p className=' pt-5 dark-color'>{details.synopsis}</p>
        </div>
        </div>

        <div className="row justify-content-between align-items-center  p-5">

            <div className=" col-lg-12 d-flex justify-content-center">
                {details.trailer?.embed_url ? 
                    <iframe 
                        src={details.trailer?.embed_url} 
                        title="Inline Frame Example"
                        width="700"
                        height="400"
                        loading='lazy'
                        allowFullScreen>
                    </iframe> :
                    <h3>Trailer not available</h3>
                }
            </div>

            <h3 className="title">Characters</h3>
            <div className="characters">
                {details.characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = details.character.character
                    return <Link to={`/character/${mal_id}`} key={index}>
                        <div className="character">
                            <Image width={280} height={400} src={images.jpg.large_image_url} alt="" className=' w-75 rounded-3 ' />

                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                    </Link>
                })}
            </div>
        
    </div>
    </div>
  )
}
