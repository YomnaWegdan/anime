
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    let pathName = usePathname()

  return (
    <div>
       <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
       >
        <div className="container">
            <Link className="navbar-brand" href="/">Anime</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    
                
                    <li className="nav-item">
                    <Link  href="/">Popular</Link>
                    <Link className={pathName==='/'?'nav-link bg-info' :'nav-link'} href="/">Home</Link>
                    </li>                  
                    <li className="nav-item">
                    <Link  href="/airing">Airing</Link>
                    </li>
                    <li className="nav-item">
                    <Link  href="/upcoming">Upcoming</Link>
                    </li>                    
                </ul>
            </div>
        </div>
       </nav>
       
    </div>
  )
}
