import Link from "next/link";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
//import Loader component
import Loader from "./Loader";

const PostList = ({ posts }) => {
  //useState hooks
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState();
  const n = 9;

  //useEffect hooks
  useEffect(() => {
    setFilterData(
      posts.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page, posts]);

  return (
    <>
      {filterData ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-0 sm:gap-8">
            {filterData.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="mb-8 block min-w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div>
                  <h2 className="sm:text-lg font-bold text-blue-500 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    {post.content.slice(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center">
            {/* Pagination component */}
            <ReactPaginate
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              onPageChange={(event) => setPage(event.selected)}
              breakLabel="..."
              pageCount={Math.ceil(posts.length / n)}
              previousLabel={
                <IconContext.Provider
                  value={{ color: "#B8C1CC", size: "36px" }}
                >
                  <AiFillLeftCircle />
                </IconContext.Provider>
              }
              nextLabel={
                <IconContext.Provider
                  value={{ color: "#B8C1CC", size: "36px" }}
                >
                  <AiFillRightCircle />
                </IconContext.Provider>
              }
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PostList;
