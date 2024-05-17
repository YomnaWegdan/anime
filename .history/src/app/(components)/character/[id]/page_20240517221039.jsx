'use client'
import Image from 'next/image'
import React from 'react';
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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 
    };
  return (
      <div className='row align-items-center justify-content-center g-5'>

      <div className='col-lg-12  text-center'>
      <Image width={400} height={280} src={gallery[0].jpg.image_url} alt="" className=' w-50 rounded-3 ' />

      </div>

      {gallery.map((el, index )=>
        <Slider {...settings} key={index}>

        <div className='col-lg-3' >
        <Image width={200} height={300} src={el.jpg.image_url} alt="" className=' w-100 rounded-3 ' />
        </div>
        </Slider>

      )}
    </div>
  )
}















