import React, { useEffect } from 'react'
import { fetchAsyncGallery,  getGallery } from '../features/gallerySlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Home = () => {


const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchAsyncGallery())
}, [dispatch])


const gallery = useSelector(getGallery)
console.log(gallery);


  return (
    <div>Home</div>
  )
}

export default Home