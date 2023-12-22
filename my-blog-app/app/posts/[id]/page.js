
'use client'
import { useRouter } from 'next/navigation';
import { useContext ,useState,useEffect} from 'react';
import { BlogContext } from '../../context/BlogContext';
import axios from "axios"

const PostDetail = ({params}) => {
  const router = useRouter();
  const [detail, setdetail] = useState();
  const [Loading, setLoading] = useState(true)
 const id = params.id;
  console.log(params.id,"id");
//   const {fetchPosts}  = useContext(BlogContext);
//   console.log(fetchPosts)
//   const post = fetchPosts.find((p) => console.log(p,"pppp"));
// console.log(post,"individula");

const fetchDetail = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/posts/${id}`);
     setdetail(response.data),
      setLoading(false)          
  }
   catch (error) {
    console.error('Error fetching posts:', error);
  }
};
useEffect(() => {
  fetchDetail()

 
}, [])


  

  return (
    
      !Loading && detail ?
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{detail.title}</h1>
      <p className="text-gray-600 mb-2">Author:{detail.body} </p>
      
    </div>
    :"Loading"
    
    
  );
};

export default PostDetail;
