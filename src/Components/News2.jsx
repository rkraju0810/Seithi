import React from 'react'
import logo from "../assests/news_img.png"
import "./news.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import DataContext from '../Contextapi/contextapi'

const News2 = () => {
    
    const {news2,handleshowdescription} = useContext(DataContext)

  return (
    <div>
    {
    news2.map((news, index) =>
        <div className="card mb-3 p-3 mx-auto" key={index} style={{ maxWidth: "800px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={news.urlToImage ? news.urlToImage : logo} className="img-fluid rounded-start" alt="..." style={{ height: "100%" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link to={'/des'}  style={{ textDecoration: 'none'}}><h5 className="card-title" onClick={()=>handleshowdescription(news)}>{news.title}</h5></Link>
                        <p className="card-text">{news.description}</p>
                        <p className="card-text"><small className="text-body-secondary">{news.publishedAt.slice(0,10)}</small></p>
                    </div>
                </div>
            </div>
        </div>)
} </div>
  )
}

export default News2