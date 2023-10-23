"use client";
import React, { useEffect, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import PostThumbnail from "@/component/PostThumbnail";
import { PostType } from "@/model/PostType";

interface ProfileProps {
  avatarUrl: string;
  username: string;
  isCurrentUser: boolean;
  posts: PostType[];
  savedPosts: PostType[];
  numFollowing: number;
  numFollower: number;
  isFollowing: boolean;
}

export default function Profile(props: ProfileProps) {
  const [isPostTab, setIsPostTab] = useState(true);
  const [currentPosts, setCurrentPosts] = useState(
    isPostTab ? props.posts : props.savedPosts
  );
  const [isFollowing, setIsFollowing] = useState(props.isFollowing);

  const handleFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    setCurrentPosts(isPostTab ? props.posts : props.savedPosts);
  }, [isPostTab]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center">
          <div className="avatar ">
            <div className="w-24 rounded-full">
              <img src={props.avatarUrl} />{" "}
            </div>
          </div>
          <label className="font-semibold text-xl mt-2">{props.username}</label>
        </div>
        <div className=" space-x-20 ml-10">
          <label>{props.posts.length} posts</label>
          <label>{props.numFollowing} following</label>
          <label>{props.numFollower} followers</label>
        </div>
      </div>
      {props.isCurrentUser ? (
        <div className="flex items-center space-x-10 justify-center m-10">
          <button className="btn btn-xs sm:btn-sm max-w-xl btn-info btn-wide">
            Edit profile
          </button>
          <button className="btn btn-xs sm:btn-sm max-w-xl btn-info btn-wide">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-10 justify-center m-10">
          <button
            className={`btn btn-xs sm:btn-sm max-w-lg ${
              isFollowing ? "btn-active" : "btn-info"
            } btn-wide`}
            onClick={() => handleFollowing()}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
          <button className="btn btn-xs sm:btn-sm max-w-xl btn-info btn-wide">
            Message
          </button>
        </div>
      )}
      <div className="tabs items-center justify-center">
        <a
          className={`tab tab-bordered ${isPostTab ? "tab-active" : ""}`}
          onClick={() => setIsPostTab(true)}
        >
          <div className="flex items-center space-x-2">
            <LuMenuSquare></LuMenuSquare>
            <label>POSTS</label>
          </div>
        </a>
        <a
          className={`tab tab-bordered ${!isPostTab ? "tab-active" : ""}`}
          onClick={() => setIsPostTab(false)}
        >
          <div className="flex items-center space-x-2">
            <BsBookmark></BsBookmark>
            <label>SAVED</label>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-3 mt-2">
        {currentPosts.map((post) => (
          <div key={post.id} className="">
            <PostThumbnail post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
