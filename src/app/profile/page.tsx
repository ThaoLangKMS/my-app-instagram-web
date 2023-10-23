"use client";
import React, { useEffect, useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import PostThumbnail from "@/component/PostThumbnail";
import { PostType } from "@/model/PostType";
import Profile from "@/component/Profile";
import { useAuth } from "@/context/AuthContext";

export default function AccountInfo() {
  const { user, isAuthModalOpen } = useAuth();
  console.log("USER", user);
  const posts = [
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
  ];

  const savedPosts = [
    {
      id: 1,
      medias: [
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "image", url: "camera.png" },
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
    {
      id: 1,
      medias: [
        { type: "video", url: "blue.mp4" },
        { type: "image", url: "front_camera.png" },
        { type: "image", url: "back_camera.png" },
      ],
      title: "Hello world",
      user: { id: "1", username: "Thao", avatarUrl: "camera.png" },
      numLikes: 10,
      numComments: 20,
    },
  ];

  const [isPostTab, setIsPostTab] = useState(true);
  const [currentPosts, setCurrentPosts] = useState(
    isPostTab ? posts : savedPosts
  );

  useEffect(() => {
    setCurrentPosts(isPostTab ? posts : savedPosts);
  }, [isPostTab]);

  return (
    <Profile
      avatarUrl="front_camera.png"
      username={user?.username ||"null"}
      isCurrentUser={false}
      posts={posts}
      savedPosts={savedPosts}
      numFollowing={10}
      numFollower={5}
      isFollowing={false}
    />
  );
}
