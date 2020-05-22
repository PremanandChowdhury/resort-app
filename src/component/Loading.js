import React from "react";
import LoadingGif from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      loading data ...
      <img src={LoadingGif} alt="" />
    </div>
  );
}
