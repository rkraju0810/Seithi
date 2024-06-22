import React, { useContext, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import DataContext from '../Contextapi/contextapi'

const Navbar = () => {



  const categoryArr = ['Business', 'Entertainment', 'Health', 'Science', 'Technology', 'Sports']

  const countryArr = [
    { "name": "China", "code": "cn" },
    { "name": "India", "code": "in" },
    { "name": "Japan", "code": "jp" },
    { "name": "South Korea", "code": "kr" },
    { "name": "United States", "code": "us" },
  ]



  const [searchcontentvalue , setSearchcontentvalue] = useState('')

  



  function handlesetSearchcontent (e){
    e.preventDefault()
    setSearchcontent(searchcontentvalue)
    setSearchcontentvalue('')
  }

  const {category,setCategory,setSearchcontent,country,handlesetCategory,handlesetCountry} = useContext(DataContext)

  return (

    <nav className="navbar navbar-expand-xl bg-body-tertiary navbar-fixed-top" >
      <div className="container-fluid">
        <Link to={'/'} style={{ textDecoration: 'none'}} onClick={() =>  setSearchcontent('')}><h1 className="navbar-brand">SE<span className='spantext-navbar'>IT</span>HI</h1></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* category links here */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to={'/'}    style={{ textDecoration: 'none'}}><h1 className={`nav-link ${category == "general" ? 'active' : ''}`} aria-current="page" onClick={() => setCategory("general")}>Home</h1></Link>
            </li>
            {
              categoryArr.map((arr, index) =>
                <li className="nav-item" key={index}>
                  <h1 className={`nav-link ${category == arr ? 'active' : ''}`} onClick={() => handlesetCategory(arr)}>{arr}</h1>
                </li>
              )
            }
          </ul>

          <div>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sports</a>
            </li> */}
          </div>

          {/* dropdows for country selection */}

          <div className="dropdown me-2 mb-2  mb-xl-0">
            <a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {country}
            </a>
            <ul className="dropdown-menu">
              {
                countryArr.map((arr, index) =>
                  <li key={index}><a className="dropdown-item" onClick={() => handlesetCountry(arr)}>{arr.name}</a></li>
                )
              }
            </ul>
          </div>



          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={searchcontentvalue} onChange={(e)=>setSearchcontentvalue(e.target.value)}/>
            <button className="btn btn-secondary btn-search" type="submit" onClick={(e)=>handlesetSearchcontent(e)}>Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar