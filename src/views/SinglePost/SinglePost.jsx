import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncImage, getImage } from "../../features/gallerySlice";
import './singlePost.scss'

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const image = useSelector(getImage); 
  console.log(image);



  useEffect(() => {
    dispatch(fetchAsyncImage(id))
  }, [dispatch, id]);

  return (
    <div className='movie-section'>
    {Object.keys(image).length === 0 ?
    <div>... Loading</div>  
    :
    <>
    <div className="section-left">
      <div className="movie-title">
      </div>
      <div className="movie-rating">
        <span>
          IMDB Rating <i className='fa fa-star'></i> : 
        </span>
        <span>
          IMDB Votes <i className='fa fa-thumbs-up'></i> : 
        </span>
        <span>
          Runtime <i className='fa fa-film'></i> : 
        </span>
        <span>
          Year <i className='fa fa-calendar'></i> : 
        </span>
      </div>
      <div className="movie-plot">
      </div>
      <div className="movie-info">
        <div>
          <span>Director</span>
          <span></span>
        </div>
        <div>
          <span>Stars</span>
          <span></span>
        </div>
        <div>
          <span>Genres</span>
          <span></span>
        </div>
        <div>
          <span>Awards</span>
          <span></span>
        </div>
      </div>
    </div>
    <div className="section-right">
      
    </div>
    </>
  }
  </div>
  );
};

export default SinglePost;
