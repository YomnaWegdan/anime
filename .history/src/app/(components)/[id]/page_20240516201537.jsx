import React from 'react'

export default async function animateDetails({params}) {
    let id = params.id

    async function getDeta() {
        let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        response =await response.json()
        return response.data     
    }
    let details = await getProducts()
  return (
    <div>
      
    </div>
  )
}
