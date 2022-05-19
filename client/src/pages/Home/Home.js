import React from 'react'
import Filter from '../../components/Filter/Filter'
import './Home.css'
import PostItem from '../../components/PostItem/PostItem';
import { useStateContext } from "../../context/stateContent";


const Home = () => {
  const { filter} = useStateContext();

  console.log("filter", filter);

  return (
    <div className='app_home dflex'>
       <div className="app_home_filter">
         <Filter />
       </div>
       <div className="app_home_filter_resalt">
         {
           filter.map((item)=><PostItem key={item._id} item={item} />)
         }
       </div>
    </div>
  )
}

export default Home