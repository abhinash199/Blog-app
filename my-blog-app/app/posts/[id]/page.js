import PostDetail from "@/app/components/PostDetail";

//implement seo optimization funtionality
// export async function generateMetadata({ params }) {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const blog = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`
//   ).then((res) => res.json());

//   return {
//     title: blog.title,
//     description: blog.content,
//   };
// }

const PostDetailPage = ({ params }) => {
  return <PostDetail params={params} />;
};

export default PostDetailPage;
