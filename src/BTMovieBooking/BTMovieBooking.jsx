import React from "react";
import ChairList from "./ChairList";
import Result from "./Result";
import data from "./data.json";

const BTMovieBooking = () => {
  return (
    <div className="background">
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-8 d-flex flex-column align-items-center justify-content-center">
              <h1
                className="text-center mb-5"
                style={{
                  background: "linear-gradient(45deg, yellow, orange, white)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </h1>

              <div className="p-2 fs-3 text-white text-center mb-3 screen">
                Screen
              </div>
              <ChairList data={data} />
            </div>

            <div className="col-4">
              <Result />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTMovieBooking;
