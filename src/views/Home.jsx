import React, { useEffect, useState } from "react";
import {
  fetchAsyncGallery,
  fetchAsyncImage,
  getGallery,
  getLoading,
} from "../features/gallerySlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../components/Card/Card";
import "../App.scss";

const Home = () => {
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [window, setWindow] = useState("day");
  const [viral, setViral] = useState("true");

  const dispatch = useDispatch();
  const gallery = useSelector(getGallery);
  const loading = useSelector(getLoading);
  let tempGallery = [];

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

  useEffect(() => {
    dispatch(fetchAsyncGallery(section, sort, window, viral));
    dispatch(fetchAsyncImage())
    console.log(section, sort, window, viral);
  }, [dispatch, section, sort, window, viral]);

  return (
    <div>
      {loading ? (
        <div>load</div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h1>Section</h1>
              <select
                defaultValue={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="hot">Hot</option>
                <option value="top">Top</option>
                <option value="user">User</option>
              </select>
            </div>
            <div>
              <h1>Sort</h1>
              <select
                defaultValue={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="hot">Viral</option>
                <option value="top">Top</option>
                <option value="time">Time</option>
              </select>
            </div>
            <div>
              <h1>Window</h1>
              <select
                defaultValue={window}
                onChange={(e) => setWindow(e.target.value)}
              >
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="all">All</option>
              </select>
            </div>
            <div>
              <h1>Viral</h1>
              <select
                defaultValue={viral}
                onChange={(e) => setViral(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="container">
            {imageGallery.map((image) => (
              <Card link={image.link} description={image.description} key={image.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
