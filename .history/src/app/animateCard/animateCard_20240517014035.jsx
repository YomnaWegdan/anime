import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AnimateCard({data, id , images}) {
  return (
        <div className=" col-lg-3" key={id}>
        <Link href={`/${id}`}>

            <div className='animate'>
                <Image width={280} height={400} src={images} alt="" className=' w-100 rounded-3 ' />
            </div>
            </Link>
        </div>

        
    
    
</div>
  )
}
