import React from 'react'
import "./news.css"
import logo from "../assests/news_img.png"
import { useContext } from 'react'
import DataContext from '../Contextapi/contextapi'
import { Link } from "react-router-dom"
const Headernews = () => {

    const {news1,handleshowdescription} = useContext(DataContext)

    if (!news1) {
        return <div className='loading'>Loading...</div>;
      }

 {
  return (
      <div >
                    <div className="card mx-auto my-5 p-2" style={{ width: "800px" }}>
                        <img className="card-img-top" src={news1.urlToImage ? news1.urlToImage : logo } alt="..." />
                        <div className="card-body">
                            {/* <h5 className="card-title">{news1.title}</h5> */}
                            <Link to={'/des'}  style={{ textDecoration: 'none'}}><h5 className="card-title" onClick={()=>handleshowdescription(news1)}>{news1.title}</h5></Link>
                            <p className="card-text">{news1.description}</p>
                            <p className="card-text"><small className="text-body-secondary">{news1.publishedAt.slice(0,10)}</small></p>
                        </div>
                    </div>
                </div> 
  )
}
}
export default Headernews