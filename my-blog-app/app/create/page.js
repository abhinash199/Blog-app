'use client'
import PostForm from "../components/PostForm";
const CreatePost = () => {
  return (
    <div className="container mx-auto mt-8 w-4/5 sm:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePost;
