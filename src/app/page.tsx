"use client";
import Post from "@/component/Post";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import AuthModal from "@/component/AuthModal";

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

export default function Home() {
  const { user, isAuthModalOpen } = useAuth();
  console.log("USER", user);
  return (
    <main>
      {user ? (
        <div>
          {posts.map((post) => (
            <div key={post.id} className="">
              <Post post={post} isLiked={false} isSaved={false} />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white">
          <AuthModal />
        </div>
      )}
    </main>
  );
}
