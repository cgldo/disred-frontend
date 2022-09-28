import React from "react";
import "./App.css";
import {useGlobalState} from './state.ts';

import Posts from "./Components/posts/post";
import Commentab from "./Components/comments/commentab";
const App = () => {
  const [comment] = useGlobalState('comment');
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog App using React Js 
      </h1>
      <div class="relative">
      {comment ? <Commentab/> : null}
      <Posts />
      </div>
    </div>
  );
};
  
export default App;
