"use client";
import { useEffect, useContext } from "react";
import PostList from "./components/PostList";
import { BlogContext } from "./context/BlogContext";

const Home = () => {
  //use context for post
  const { posts, fetchPosts } = useContext(BlogContext);

  //fetching all posts
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container flex justify-center flex-col items-center mx-auto mt-2 p-3 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
