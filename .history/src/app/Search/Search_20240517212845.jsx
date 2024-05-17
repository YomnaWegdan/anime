'use client'
import React, {  useState } from 'react'

export default  function Search() {
  const [searchValue, setSearchValue] = useState('')

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
        return response.data

        

    }

  return (
    <div className='  mt-4'>
      <input className=' form-control  w-75 mx-auto' placeholder='Search...'   onChange={handleChange}
      value={searchValue}/>
      <button type='submit' className='btn btn-p ' onClick={handleSubmit}>
      search
  </button>
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
    // const searchAnime = async (anime) => {
    //     dispatch({type: LOADING})
    //     const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
    //     const data = await response.json();
    //     dispatch({type: SEARCH, payload: data.data})
    // }




//     const {data } = useContext(Context);

//     const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Filter the searchData based on the search query
//     const filteredData = data.filter(item =>
//       item.name.toLowerCase().includes(query.toLowerCase())
//     );

//     setSearchResults(filteredData);
//   };

//   useEffect(()=>{
//     console.log(searchResults)
//   }, [searchQuery])