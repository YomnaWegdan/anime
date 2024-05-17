
import React from 'react'
import AnimateCard from '../animateCard/animateCard';

export default async function Popular() {

  async function popularAnimate(){

    let response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
    response =await response.json()
    return response.data     
    }

    let data = await popularAnimate()
    console.log(data)

  return (
    <div className="row justify-content-center align-items-center g-2">
    {data.map(data=>
        <AnimateCard data={data} id={data.mal_id} images={data.images.jpg.large_image_url} key={data.mal_id}/>
    )}
</div>
)
}


/*
 <div className="row justify-content-center align-items-center g-2">
    {data.map(data=>
        <div className=" col-lg-3" key={data.mal_id}>
        <Link href={`/${data.mal_id}`}>

            <div className='animate'>
                <Image width={280} height={400} src={data.images.jpg.large_image_url} alt="" className=' w-100 rounded-3 ' />
            </div>
            </Link>
        </div>

    )}
        
    </div>
    
*/

/*


    //handle change
    const handleChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value === ''){
            state.isSearch = false;
        }
    }


    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            searchAnime(search);
            state.isSearch = true;
        }else{
            state.isSearch = false;
            alert('Please enter a search term')
        }
    }

    //fetch popular anime
    const getPopularAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=bypopularity`);
        const data = await response.json();
        dispatch({type: GET_POPULAR_ANIME, payload: data.data})
    }

    //fetch upcoming anime
    const getUpcomingAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=upcoming`);
        const data = await response.json();
        dispatch({type: GET_UPCOMING_ANIME, payload: data.data})
    }


    //fetch airing anime
    const getAiringAnime = async () => {
        dispatch({type: LOADING})
        const response = await fetch(`${baseUrl}/top/anime?filter=airing`);
        const data = await response.json();
        dispatch({type: GET_AIRING_ANIME, payload: data.data})
    }

    //search anime
    const searchAnime = async (anime) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({type: SEARCH, payload: data.data})
    }

    //get anime pictures
    const getAnimePictures = async (id) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`);
        const data = await response.json();
        dispatch({type: GET_PICTURES, payload: data.data})
    }

    //initial render
    React.useEffect(() => {
        getPopularAnime();
    }, [])


*/