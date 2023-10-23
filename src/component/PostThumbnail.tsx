"use client";
import React, { useState } from "react";
import { PostType } from "../model/PostType";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import PostModal from "./PostModal";

interface PostThumbnailProps {
  post: PostType;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post }) => {
  const [hovered, setHovered] = useState(false);
  const [isOpenedPostModal, setIsOpenedPostModal] = useState(false);

  const closePostModal = () => {
    setIsOpenedPostModal(false);
  };

  const handleOpenPostModal = () => {
    setIsOpenedPostModal(true);
  };

  return (
    <>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => handleOpenPostModal()}
      >
        {hovered ? (
          <div className="absolute w-full h-full flex flex-row items-center justify-center bg-slate-200 bg-opacity-25">
            <div className="text-white font-semibold flex flex-row space-x-2">
              <span className="mr-2 flex flex-row">
                <AiOutlineHeart size={25} />
                {post.numLikes}
              </span>
              <span className="flex flex-row">
                <FaRegComment size={23} />
                {post.numComments}
              </span>
            </div>
          </div>
        ) : null}
        {post.medias[0].type === "image" ? (
          <img src={post.medias[0].url} alt="Post" className="w-full" />
        ) : (
          <video
            className="items-center align-middle"
            src={post.medias[0].url}
            controls
          />
        )}
      </div>
      {isOpenedPostModal && (
        <PostModal isOpened={isOpenedPostModal} closeModal={closePostModal} />
      )}
    </>
  );
};

export default PostThumbnail;
