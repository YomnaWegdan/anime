import React from 'react'

export default function animateCard() {
  return (
    <div>
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
    
    
</div>
  )
}
