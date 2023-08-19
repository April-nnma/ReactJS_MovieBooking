import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { baiTapMovieBookingActions } from "../store/baiTapMovieBooking/slice";
import "./style.scss";

const Result = () => {
  const dispatch = useDispatch();
  const { chairBookings } = useSelector((state) => state.baiTapMovieBooking);
  console.log("chairBookings", chairBookings);
  return (
    <div>
      <h2
        className="mt-5 mb-4 text-center"
        style={{
          color: "white",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          fontWeight: "bold",
        }}
      >
        Chosen seats list
      </h2>

      <div className="result">
        <div className="d-flex gap-3 mt-3">
          <div className="Chair booked"></div>
          <p>Reserved</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair booking"></div>
          <p>Selected</p>
        </div>
        <div className="d-flex gap-3 mt-3">
          <div className="Chair"></div>
          <p>Availablet</p>
        </div>
      </div>
      <table className="table mt-3 result__bot">
        <thead>
          <tr>
            <td className="top">Seats</td>
            <td className="top text-center">Price</td>
            <td className="top text-center">Delete</td>
          </tr>
        </thead>
        <tbody>
          {chairBookings.map((chair) => (
            <tr key={chair.soGhe}>
              <td>{chair.soGhe}</td>
              <td className="text-center">{chair.gia}</td>
              <td
                className="text-danger font-bold fs-4 cursor-pointer text-center"
                onClick={() => {
                  dispatch(baiTapMovieBookingActions.setChairBookings(chair));
                }}
              >
                X
              </td>
            </tr>
          ))}
          <tr>
            <td className="thanhToan">Total</td>
            <td className="text-center">
              {chairBookings.reduce((total, chair) => {
                return (total += chair.gia);
              }, 0)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-warning text-white fs-5 Bold text"
        onClick={() => {
          dispatch(baiTapMovieBookingActions.setChairBookeds());
        }}
      >
        Payment
      </button>
    </div>
  );
};

export default Result;
