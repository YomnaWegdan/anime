import React from 'react'

export default function Search() {
  return (
    <div className='  mt-4'>
      <input className=' form-control  w-75 mx-auto' placeholder='Search...'/>
    </div>
  )
}


// const handleChange = (e) => {
//     setSearch(e.target.value);
//     if(e.target.value === ''){
//         state.isSearch = false;
//     }
// }


// //handle submit
// const handleSubmit = (e) => {
//     e.preventDefault();
//     if(search){
//         searchAnime(search);
//         state.isSearch = true;
//     }else{
//         state.isSearch = false;
//         alert('Please enter a search term')
//     }
// }

    //search anime
    const searchAnime = async (anime) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({type: SEARCH, payload: data.data})
    }
