'use client'

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    let pathName = usePathname()
  return (
    <div>
       <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
       >
        <div className="container">
            <Link className="navbar-brand" href="/">E-commerce</Link>
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
                        <Link className={pathName==='/'?'nav-link bg-info' :'nav-link'} href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={pathName==='/products'?'nav-link bg-info' :'nav-link'} href="/products">Products</Link>
                    </li>                  
                    <li className="nav-item">
                    <Link className={pathName==='/categories'?'nav-link bg-info' :'nav-link'} href="/categories">Categories</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={pathName==='/cart'?'nav-link bg-info' :'nav-link'} href="/cart">Cart</Link>
                    </li>                    
                </ul>
            </div>
        </div>
       </nav>
       
    </div>
  )
}
