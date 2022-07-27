import React from "react";
import blueBlob from "./../images/blue.png"
import yellowBlob from "./../images/yellow.png"



export default function NotStarted() {
  return (
    <div className="">
      <img className="ml-auto" src={yellowBlob}></img>
      <div className="w-full flex flex-col items-center justify-center mt-32">
        <h1 className="font-bold text-3xl text-[#293264]">Quizzical</h1>
        <p className="mt-2 text-[#293264]">Some description if needed</p>
        <button className="mt-5 font-medium text-xl text-white py-3 px-10 bg-[#4D5B9E] rounded-xl">Start quiz</button>
      </div>
      <img className="mt-auto mr-auto" src={blueBlob}></img>
    </div>
  );
}
