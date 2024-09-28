"use client";
import react, { useEffect } from "react";

export default function error(error, reset) {
  useEffect(() => {
    console.log(error);
  });
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later</h1>
      <button className="hover:text-blue-500" onClick={() => reset()}>
        {" "}
        Try Again
      </button>
    </div>
  );
}
