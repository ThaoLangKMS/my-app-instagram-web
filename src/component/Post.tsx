"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CarouselDefault } from "./Carousel";
import PostModal from "./PostModal";
import React, { useRef, useState, useEffect } from "react";
import { PostType } from "@/model/PostType";
import { AlertCustomStyles } from "./AlertCustom";

interface PostProps {
  post: PostType;
  isLiked: boolean;
  isSaved: boolean;
}

export default function Post(props: PostProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showSavedNoti, setShowSavedNoti] = useState(false);
  const [numlikes, setNumLikes] = useState(props.post.numLikes);
  const animationDuration = 800;
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [isSaved, setIsSaved] = useState(props.isSaved);
  const [isOpenedComment, setIsOpenedComment] = useState(false);

  const closeCommentModal = () => {
    setIsOpenedComment(false);
  };

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowAnimation(true);
      setNumLikes(numlikes + 1);
    } else {
      setNumLikes(numlikes - 1);
    }

    setTimeout(() => {
      setShowAnimation(false);
    }, animationDuration);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    if (isSaved) {
      setShowSavedNoti(true);
    }

    setTimeout(() => {
      setShowSavedNoti(false);
    }, 2000);
  };
  const handleCommentIconClick = () => {
    setIsOpenedComment(true);
  };
  return (
    <div className="border rounded-xl w-8/12 ">
      <div className="p-4">
        <div className="flex mb-4 ">
          <div className="flex space-x-2 ">
            <div className="avatar ">
              <div className="w-12 rounded-full">
                <img src={props.post.user.avatarUrl} />{" "}
              </div>
            </div>
            <label className="font-bold  mt-2">
              {props.post.user.username}
            </label>
          </div>
        </div>

        <CarouselDefault showAnimation={showAnimation}></CarouselDefault>

        <div className="flex justify-between  mt-2">
          <div className="flex space-x-6">
            <div onClick={() => handleHeartClick()}>
              {isLiked ? (
                <img src="/red_heart.png" className="" />
              ) : (
                <AiOutlineHeart size={25} />
              )}
            </div>
            <div onClick={() => handleCommentIconClick()}>
              <FaRegComment size={23} />
            </div>
          </div>
          <div onClick={() => handleSaveClick()}>
            {isSaved ? <BsBookmark size={23} /> : <BsBookmarkFill size={23} />}
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <label className=" text-sm mt-2">{numlikes} Likes</label>
          <label className="text-l font-bold">My new wallpaper</label>
          <label className=" text-sm">{props.post.numComments} Comments</label>
        </div>
        <PostModal isOpened={isOpenedComment} closeModal={closeCommentModal} />
        {showSavedNoti && (
          <AlertCustomStyles content="Add to Saved list successfully" />
        )}
      </div>
    </div>
  );
}
