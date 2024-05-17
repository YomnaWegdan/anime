'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

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
      <div className='row align-items-center justify-content-center g-5'>

      <div className='col-lg-12  text-center'>
      <Image width={400} height={280} src={gallery[index].jpg.image_url} alt="" className=' w-50 rounded-3 ' />

      </div>

      {gallery.map((el, index )=>
        <div className='col-lg-3' key={index}>
        <Image width={200} height={300} src={el.jpg.image_url} alt="" className=' w-100 rounded-3 ' />
        </div>

      )}
    </div>
  )
}















