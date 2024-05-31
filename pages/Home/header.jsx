import React from 'react'

function header() {
  return (
    <div>
      
        <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">Tempo</a></h1>
     
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a className="nav-link scrollto" href="/admin">admin</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>


     
      </header>

   

    </div>
  )
}

export default header
