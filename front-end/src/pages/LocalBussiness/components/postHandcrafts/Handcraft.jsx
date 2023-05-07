import "../commonCSS/pagesb.css";
import "../commonCSS/posts.css";

import PostsH from "../postHandcrafts/PostsH";
import Sidebar from "../sidebar/Sidebar";

export default function Handcraft() {
  return (
    <>
      
      <div className="pagesb">
        
         <PostsH/>
        <Sidebar/> 
      </div>
    </>
  )
}
