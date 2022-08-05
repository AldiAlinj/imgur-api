import React, { useEffect, useState } from 'react'
import { fetchAsyncGallery,  getGallery, getLoading } from '../features/gallerySlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Card from '../components/Card/Card';

const Home = () => {

  const [parameters, setParameters] = useState({
      section: 'hot',
      sort: 'viral',
      window: 'day',
      viral: 'true'
  })






const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAsyncGallery(parameters.section, parameters.sort, parameters.window, parameters.viral))
}, [dispatch, parameters.section, parameters.sort, parameters.window, parameters.viral])


const gallery = useSelector(getGallery)
const loading = useSelector(getLoading)






  return (
    <div>
    {loading ? (
        <div>load</div>
    ) : (
      <>
     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
     <div>
        <h1>Section</h1>
      <select onChange={(e) => setParameters({
        ...parameters, section: e.target.value
      })}>
        <option value="hot">Hot</option>
        <option value="top">Top</option>
        <option value="user">User</option>
      </select> 
      </div>
      <div>
        <h1>Sort</h1>
      <select onChange={(e) => setParameters({
        ...parameters, sort: e.target.value
      })}>
        <option value="hot">Viral</option>
        <option value="top">Top</option>
        <option value="time">Time</option>
      </select> 
      </div>
      <div>
        <h1>Window</h1>
      <select onChange={(e) => setParameters({
        ...parameters, window: e.target.value
      })}>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
        <option value="all">All</option>
      </select> 
      </div>
      <div>
        <h1>Viral</h1>
      <select onChange={(e) => setParameters({
        ...parameters, viral: e.target.value
      })}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select> 
      </div>

     </div>
      {gallery.data.map((image) => ( 
        <Card title={image.title} link={image.link} k />
        ))}
      </>
    )
  }
    </div>

    )
  

}






export default Home