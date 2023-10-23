"use client";
import React, { useState } from "react";
import { CarouselDefault } from "./Carousel";
import CommentItem from "./CommentItem";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

interface PostModalProps {
  isOpened: boolean;
  closeModal: () => void;
}

const commentList = ["nice", "great"];

export default function PostModal(props: PostModalProps) {
  const [isLiked, setIsLiked] = useState(false);
  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowAnimation(true);
    }

    setTimeout(() => {
      setShowAnimation(false);
    }, 800);
  };
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <div>
      {props.isOpened && (
        <div className="modal modal-open">
          <div className="modal-box mx-auto my-auto bg-white w-8/12 rounded-xl">
            {" "}
            <form method="dialog">
              <button
                onClick={props.closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <div className="flex grid grid-cols-2 space-x-2">
              <CarouselDefault showAnimation={showAnimation}></CarouselDefault>
              <div className="">
                <div className="flex space-x-2 my-4">
                  <div className="avatar ">
                    <div className="w-12 rounded-full">
                      <img src="data:image/jpeg;base64,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"></img>
                    </div>
                  </div>
                  <label className="font-bold mt-2">Thao Lang</label>
                </div>
                <label className="ml-8 mr-8 text-s">My new wallpaper</label>
                <hr className="mr-2 mt-4" />
                <div className="p-4 space-y-2">
                  {commentList.map((comment: string, index) => (
                    <div className="py-2">
                      <CommentItem comment={comment} />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-100 w-1/2 col-start-3  flex flex-row space-x-2 items-center justify-between">
                  <div onClick={() => handleHeartClick()}>
                    {isLiked ? (
                      <img src="/red_heart.png" />
                    ) : (
                      <AiOutlineHeart size={25} />
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="mr-2">
                    <FiSend size={25} className="mr-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
