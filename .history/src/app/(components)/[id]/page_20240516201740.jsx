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
        <div className=" col-lg-4" key={data.mal_id}>
            <div className='animate'>
                <Image width={280} height={400} src={data.images.jpg.large_image_url} alt="" className=' w-100 rounded-3 ' />
            </div>
        </div>
        <div className=" col-lg-8" key={data.mal_id}>
            <div className='animate'>
                <Image width={280} height={400} src={data.images.jpg.large_image_url} alt="" className=' w-100 rounded-3 ' />
            </div>
        </div>

        
    </div>
    </div>
  )
}
