"use client";
import { useState, useEffect } from "react";
import axios from "axios";
//import Loader component
import Loader from "@/app/components/Loader";

const PostDetail = ({ params }) => {
  // useState hooks
  const [detail, setdetail] = useState();
  const [Loading, setLoading] = useState(true);

  //get id from url
  const id = params.id;

  //fetch Post Detail for ID
  const fetchDetail = async (id) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`
      );
      setdetail(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  //useEffect hooks
  useEffect(() => {
    fetchDetail(id);
  }, []);

  return !Loading && detail ? (
    <div className="container bg-white border border-gray-200 rounded-lg shadow p-6 w-[90%] md:w-1/2 mx-auto mt-8">
      <h1 className="text-lg font-bold mb-4">{detail.title}</h1>
      <p className="text-gray-600 mb-2 text-base">{detail.content} </p>
      <p className="text-gray-600 text-base mb-2">
        {" "}
        <span className=" font-bold">Author: </span>
        {detail.author}{" "}
      </p>
    </div>
  ) : (
    <Loader />
  );
};

export default PostDetail;
