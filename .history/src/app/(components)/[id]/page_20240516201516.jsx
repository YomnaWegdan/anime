import React from 'react'

export default async function animateDetails({params}) {
    let id = params.id

    async function getProducts() {
        let response = await fetch(`https://api.jikan.moe/v4/anime/${productId}`)
        response =await response.json()
        return response.data     
    }
    let product = await getProducts()
  return (
    <div>
      
    </div>
  )
}
