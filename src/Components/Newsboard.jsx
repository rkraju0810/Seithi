import React, { useContext, useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import DataContext from '../Contextapi/contextapi';

const Newsboard = () => {

 

const {article,setArticle,countrycode,category,isnextpage,setIsnextpage,searchcontent} = useContext(DataContext)



  return (
    <div>
      <h1 className='mx-auto' style={{width:"240px"}}>Latest<span className='badge mx-1' style={{backgroundColor:"red"}}>News</span></h1>
      <Newsitem />
    </div>
  )
}

export default Newsboard
