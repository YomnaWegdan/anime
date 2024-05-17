import React from 'react'

export default async function page({params}) {
    let id = params.id

    async function getDetails() {
        let response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        response =await response.json()
        return response.data     
    }
    let details = await getDetails()
  return (
    <div>
      
    </div>
  )
}
