import React from "react";


export const handleClick =() => {
    console.log("hi")
 }

const Comment = ({ comment: { author, body,}, index }) => {

return (
 <div onClick={handleClick} className="flow content-center p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<div>
    <h4 className="text-lg">{author}</h4>
    <p className="line-clamp-3">{body}</p></div>
 </div>
);
};

export default Comment;
