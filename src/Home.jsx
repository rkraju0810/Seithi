import React from 'react'
import { useContext } from 'react'
import Newsboard from './Components/Newsboard'
import Pagination from './Components/Pagination'
import DataContext from './Contextapi/contextapi';

const Home = () => {

  const {news1} = useContext(DataContext)

  return (
  <>
  <Newsboard/>
  {
    news1 && <Pagination />
  }
  
  </>
  )
}

export default Home