'use client'
import AnimateCard from '@/app/animateCard/animateCard'
import React, {  useState } from 'react'

export default  function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchItems, setSearchItems] = useState([])


  const handleChange = (e) =>{
    setSearchValue(e.target.value)
}

//handle submit
const handleSubmit = async (e) =>{
    e.preventDefault()
    if(searchValue){
      await searchAnime(searchValue)
    }
}
    async function searchAnime(anime){
        let response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        response = await response.json();
        console.log('d',response.data)
        setSearchItems(response.data)
        // return response.data

        

    }


  return (
    <div className='  mt-4'>
    <div>
      <input className=' form-control  w-75 mx-auto' placeholder='Search...'   onChange={handleChange}
      value={searchValue}/>
      <button type='submit' className='btn btn-info ' onClick={handleSubmit}>
      search
      </button>
</div>
      <div className="row justify-content-center align-items-center g-2">
      {searchItems?.map(data=>
          <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
      )}
  </div>
    </div>
  )
}