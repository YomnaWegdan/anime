import React from 'react'

export default async function Search(anime) {
    async function searchAnime(){
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();

    }

    const handleSearch = (e) => {
    
    searchAnime(e.target.value)

  return (
    <div className='  mt-4'>
      <input className=' form-control  w-75 mx-auto' placeholder='Search...'  onChange={handleSearch}/>
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
  
