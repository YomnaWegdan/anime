import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

export default async function page({params}) {
    let id = params.id

    async function getGallery() {
        let response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`)
        response =await response.json()
        return response.data     
    }
    let gallery = await getGallery()
    console.log(gallery)


  return (
      <div className='row align-items-center'>

      {gallery.map((el, index )=>
        <div className='col-lg-3' key={index}>
        <Image width={200} height={300} src={el.jpg.image_url} alt="" className=' w-100 rounded-3 ' />
        </div>

      )}
    </div>
  )
}
