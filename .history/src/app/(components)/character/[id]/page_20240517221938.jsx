'use client'
import Image from 'next/image'
import Link from 'next/link';
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

    const settings = {
      customPaging: function(i) {
        return (
          <Link>
          <Image width={200} height={300} src={el.jpg.image_url[0]} alt="" className=' w-100 rounded-3 ' />

          </Link>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
  return (
      <div className='row align-items-center justify-content-center g-5'>

      
      <div className="slider-container">

      <Slider {...settings} >

      {gallery.map((el, index )=>

        <div className='col-lg-3' key={index}>
        <Image width={200} height={300} src={el.jpg.image_url} alt="" className=' w-100 rounded-3 ' />
        </div>

      )}        </Slider>
      </div>

    </div>
  )
}



/*

<div className='col-lg-12  text-center'>
      <Image width={400} height={280} src={gallery[0].jpg.image_url} alt="" className=' w-50 rounded-3 ' />

      </div>
*/










