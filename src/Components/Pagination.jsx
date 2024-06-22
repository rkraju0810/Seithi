import React, { useContext } from 'react'
import DataContext from '../Contextapi/contextapi'


const Pagination = () => {
  
  
    const {isnextpage,setIsnextpage,articles} = useContext(DataContext)

  return (
<nav aria-label="Page navigation example" className='mx-auto mt-4' style={{width:"0px"}}>
  <ul className="pagination">
    <li className= {isnextpage == true ? 'page-item disabled' : "page-item"} onClick={()=>setIsnextpage(true)}>
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true" >&laquo;</span>
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&#8657;</span>
      </a>
    </li>
    <li className= {isnextpage == false ? 'page-item disabled' : "page-item"} onClick={()=>setIsnextpage(false)}>
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true"  >&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  )
}

export default Pagination