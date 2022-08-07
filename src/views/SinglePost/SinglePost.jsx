import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addImage,
  getImage,
  removeImage,
} from "../../features/gallerySlice";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.scss";
import { HashLoader } from "react-spinners";

const SinglePost = () => {
  const dispatch = useDispatch();
  const image = useSelector(getImage);
  const data = useLocation();

  const imageData = data.state.image


  useEffect(() => {
    dispatch(addImage(imageData));
    return () => {
      dispatch(removeImage());
    };
  }, [dispatch, imageData]);

  return (
    <div className="post-section">
      {Object.keys(image).length === 0 ? (
        <div className="loader">
          <HashLoader color="white" />
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="post-ratings">
              <span>
                UpVotes <i className="fa fa-thumbs-up"></i> :
                {image.ups ?  ' ' + image.ups : " No Up Votes"}
              </span>
              <span>
                DownVotes <i className="fa fa-thumbs-down"></i> :
                {image.downs ? ' ' + image.downs : " No Down Votes"}
              </span>
              <span>
                Score <i className="fa fa-star"></i> :
                {image.score ? ' ' + image.score : " No score"}
              </span>
            </div>
            <div className="post-info">
              <div className="info-block">
                <span>Title</span>
                <span>{image.title ? image.title : "No Title"}</span>
              </div>
              <div className="info-block">
                <span>Description</span>
                <span>
                  {image.description
                    ? image.description
                    : "No description"}
                </span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={image.link} alt={image.title} />
          </div>
          <div className="back">
            <Link to='/'>
            <i class="fa-solid fa-left"></i>Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
