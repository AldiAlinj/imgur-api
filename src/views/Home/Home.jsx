import React, { useEffect, useState } from "react";
import {
  fetchAsyncGallery,
  getGallery,
  getLoading,
} from "../../features/gallerySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import '../Home/home.scss';
import { HashLoader } from "react-spinners";
const Home = () => {
 
const [parameters, setParameters] = useState({
  section: 'hot',
  sort: 'viral',
  window: 'day',
  viral: 'true',
})
  const dispatch = useDispatch();
  const gallery = useSelector(getGallery);
  const loading = useSelector(getLoading);
  let tempGallery = [];

const [count, setCount] = useState(20)




  

  useEffect(() => {
    dispatch(fetchAsyncGallery(parameters));
  }, [dispatch, parameters]);
  
  
  
    if (!loading) {
    gallery.data.map((item) => {
      item.images?.map((image) => {
        tempGallery.push(image);
        return tempGallery
      });
      return tempGallery
    });
  
  }


   let imageGallery = tempGallery.filter(
    (item) => item.type === "image/jpeg" || item.type === "image/png"
  );


  const loadMore = () => {
    let tempCount = count + 10
   setCount(tempCount)
    console.log(count);
    if(count >= imageGallery.length){
      alert('No more posts!')
    }
  }
  

  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="white"  />
        </div>
      ) : (
        <>
          <div className="select-container">
            <div className="select-group">
              <label htmlFor="section">Section</label>
              <select
              id="section"
                defaultValue={parameters.section}
                onChange={(e) => setParameters({...parameters, section: e.target.value})}
              >
                <option value="hot">Hot</option>
                <option value="top">Top</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="select-group">
            <label htmlFor="sort">Sort</label>
              <select
                id="sort"
                defaultValue={parameters.sort}
                onChange={(e) => setParameters({...parameters, sort: e.target.value})}
              >
                <option value="hot">Viral</option>
                <option value="top">Top</option>
                <option value="time">Time</option>
              </select>
            </div>
            <div className="select-group">
            <label htmlFor="window">Window</label>
              <select
              id="window"
                defaultValue={parameters.window}
                onChange={(e) => setParameters({...parameters, window: e.target.value})}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="all">All</option>
              </select>
            </div>
            <div className="select-group">
            <label htmlFor="viral">Viral</label>

              <select
              id="viral"
                defaultValue={parameters.viral}
                onChange={(e) => setParameters({...parameters, viral: e.target.value})}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="card-container">
            {imageGallery.slice(0, count).map((image) => (
              <Card key={image.id} data={image} />
            ))}
          </div>
          <div className="load-more">
            <button onClick={loadMore}>Load More</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
