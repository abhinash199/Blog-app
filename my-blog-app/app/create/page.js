import PostForm from "../components/PostForm";
export const metadata = {
  title: "Add Post",
  description:
    " This is the Post Creation Page which includes a form to create a new blog post with fields for the title, content, and author name.",
};
const CreatePost = () => {
  return (
    <div className="container mx-auto mt-8 w-[90%] sm:w-1/2 p-3 sm:p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <h1 className="text-lg font-bold mb-4">Create a New Post</h1>
      <PostForm />
    </div>
  );
};

export default CreatePost;
