import React, { useContext } from 'react'
import Headernews from './Headernews';
import News2 from './News2';
import News3 from './News3';
import DataContext from '../Contextapi/contextapi';

const Newsitem = () => {


    const { isnextpage, } = useContext(DataContext)



    return (
        <>
            <div>

                {
                    isnextpage ? 
                    <div>
                    < Headernews/>
                    <News2/> 
                    </div>
                    :
                    <News3/>
                }










            </div>



        </>

    )
}

export default Newsitem