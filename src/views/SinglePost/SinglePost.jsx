import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncImage, getImage } from "../../features/gallerySlice";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const image = useSelector(getImage); 
  console.log(image);



  useEffect(() => {
    dispatch(fetchAsyncImage(id))
  }, [dispatch, id]);

  return <div>SinglePost</div>;
};

export default SinglePost;
