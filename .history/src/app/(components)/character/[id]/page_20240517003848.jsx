import React from 'react'

export default async function page({params}) {
    let id = params.id

    async function getGallery() {
        let response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`)
        response =await response.json()
        return response.data     
    }
    let gallery = await getGallery()
  return (
    <div>
      <div className='row'>
      {gallery.map((el , index)=>
        <div className='col-lg-3' key={index}></div>

      )}
      </div>
    </div>
  )
}
