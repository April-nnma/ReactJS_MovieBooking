import React from "react";
import Chair from "./Chair";
import cn from "classnames";

const ChairList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((hangGhe) => {
        return (
          <div
            key={hangGhe.hang}
            className={cn("d-flex gap-3")}
            style={{
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <p className="mt-3 mb-0 dayHang" style={{ width: 30 }}>
              {hangGhe.hang}
            </p>
            {hangGhe.danhSachGhe.map((ghe) => {
              return (
                <Chair
                  key={ghe.soGhe}
                  ghe={ghe}
                  className={cn({
                    disabled: !hangGhe.hang,
                  })}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChairList;
