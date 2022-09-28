import React from "react";

import "./post.css";
import {setPost, setComment} from '../../state.ts';

export const handleClick =(ev, ti, au, bo, img) => {
    //console.log(event);
    //console.log(title + " " + body + " " + author +" " + imgUrl)
    setPost({event:ev, title:ti, author:au, body:bo, imgUrl:img})
    setComment(true)
 }

const Post = ({ post: { id, title, author, body, imgUrl, tags}, index }) => {

return (
 <div onClick={(event) => handleClick(event, title, author, body, imgUrl)} className="grid content-center md:grid-flow-col gap-x-8 grid-row-1 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div><img className="justify-center max-w-xs max-h-xs m-auto" src={imgUrl} alt="post" /></div>
<div>
    <h1 className="text-xl">{title}</h1>
    <h4 className="text-lg">{author}</h4>
    <p className="line-clamp-3">{body}</p></div>
 </div>
);
};

export default Post;
