import React from 'react'

export default async function page({params}) {
    let id = params.id

    async function getGallery() {
        let response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`)
        response =await response.json()
        return response.data     
    }
    let details = await getGallery()
  return (
    <div>
      
    </div>
  )
}
