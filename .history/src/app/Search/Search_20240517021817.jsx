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