"use client";
import React, { useState } from "react";
import DropZone from "@/component/DropZone";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="flex place-content-between">
        <h2 className="font-bold text-lg text-center">CREATE NEW POST</h2>
        <button className="btn btn-xs sm:btn-sm max-w-xl btn-info">Post</button>
      </div>
      <DropZone className="mt-10 border border-neutral-200 p-16 bg-white mb-10" />
      <textarea
        className="textarea textarea-bordered w-full mt-24"
        placeholder="Write a caption"
      ></textarea>
    </div>
  );
}
