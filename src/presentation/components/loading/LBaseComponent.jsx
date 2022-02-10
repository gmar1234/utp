import React from "react";

export const LBaseComponent = () => {
  return (
    <div className="gm-lc">
      <div className="gm-lc__img skeleton"></div>
      <div className="gm-lc__body">
        <h2 className="gm-lc__title skeleton">
          <span></span>
        </h2>
        <p className="gm-lc__intro skeleton"></p>
      </div>
    </div>
  );
};
