import React, { useState } from "react";
import "./posts.css";
import Post from "../post/post";
import axios from "axios"

const Posts = () => {
const baseURL = process.env.REACT_APP_URI
const [posts, setPost] =  useState([]);
axios({
    method: "get",
    url: baseURL + "/post",
  }).then(function (response) {
    setPost(response.data);
  });

return (
     <div className="px-2 md:px-8 grid gap-4 grid-cols-1">
 {posts.map((post, index) => (
  <Post key={index} index={index} post={post} />
 ))}
 </div>
);
};

export default Posts;
