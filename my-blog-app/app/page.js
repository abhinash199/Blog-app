// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     App
//     </main>
//   )
// }

"use client";
import { useEffect, useContext } from "react";

import PostList from "./components/PostList";

import { BlogContext } from "./context/BlogContext";

const Home = () => {
  const { posts, fetchPosts } = useContext(BlogContext);

  useEffect(() => {
    fetchPosts();
  }, []);
console.log(posts,"homre");
  return (
    
    <div className="container mx-auto mt-8 p-3 sm:p-20">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
