import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncImage,
  getImage,
  removeImage,
} from "../../features/gallerySlice";
import { useLocation } from "react-router-dom";
import "./singlePost.scss";
import { HashLoader } from "react-spinners";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const image = useSelector(getImage);
  const votes = useLocation();

  const ups = votes.state.ups;
  const downs = votes.state.downs;
  const score = votes.state.score;

  console.log(image);

  useEffect(() => {
    dispatch(fetchAsyncImage(id));
    return () => {
      dispatch(removeImage());
    };
  }, [dispatch, id]);

  return (
    <div className="movie-section">
      {Object.keys(image).length === 0 ? (
        <div className="loader">
          <HashLoader color="white" />
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title"></div>
            <div className="movie-rating">
              <span>
                UpVotes <i className="fa fa-thumbs-up"></i> :{" "}
                {ups ? ups : "No Up Votes"}
              </span>
              <span>
                DownVotes <i className="fa fa-thumbs-down"></i> :{" "}
                {downs ? downs : "No Down Votes"}
              </span>
              <span>
                Score <i className="fa fa-star"></i> :{" "}
                {score ? score : "No score"}
              </span>
            </div>
            <div className="movie-plot"></div>
            <div className="movie-info">
              <div>
                <span>Title</span>
                <span>{image.data.title ? image.data.title : "No Title"}</span>
              </div>
              <div>
                <span>Description</span>
                <span>
                  {image.data.description
                    ? image.data.description
                    : "No description"}
                </span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={image.data.link} alt={image.data.title} />
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
