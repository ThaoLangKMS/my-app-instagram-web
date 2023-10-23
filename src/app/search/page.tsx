import React from "react";

export default function Search() {
  return (
    <div className="">
      <div className="items-center justify-center align-center flex">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xl m-2 mx-auto"
        />
      </div>
      <div className="flex  space-x-2 mt-8 items-center ml-40 align-center">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src="/snowball.png" />
          </div>
        </div>
        <label className="font-bold  mt-2">Thao Nhi</label>
      </div>
    </div>
  );
}
