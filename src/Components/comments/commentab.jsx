import data from './tempdata.json';
import React from "react";
import Comment from "./comment";
import {useGlobalState} from '../../state.ts';

const Commentab = () => {
const [post] = useGlobalState('post');
return (
    <div className=" absolute px-2 md:px-8 grid grid-cols-1">
    <div className="grid content-center md:grid-flow-col gap-x-8 grid-row-1 p-6 bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img className="max-w-xs max-h-xs m-auto" src={post.imgUrl} alt="post" />
    <div>
    <h1 className="justify-center text-xl">{post.title}</h1>
    <h4 className="justify-center text-lg">{post.author}</h4>
    <p >{post.body}</p></div>
    </div>
{/*CommentTable.map((comment, index) => (
 <Comment key={index} index={index} comment={comment} />
))*/}
 
</div>
);
};

export default Commentab;