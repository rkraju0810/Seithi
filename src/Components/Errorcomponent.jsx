import React from 'react'
import DataContext from '../Contextapi/contextapi';
import { useContext} from 'react'





const Errorcomponent = () => {

    const {errorMessage} = useContext(DataContext)

  return (
   <>
   <div className="alert alert-danger my-2 mx-auto" style={{ width: "800px"}} role="alert">
    <div>   
     {
        errorMessage + " ,   Try Refreshing the page"
     }
    </div>
    </div>
    </> 
    
  )
}

export default Errorcomponent