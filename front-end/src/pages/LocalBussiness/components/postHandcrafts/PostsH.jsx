import "../commonCSS/posts.css"
import {HandCraftsItems} from "../../../../constants/handcraftsitems"

//import PostH from "./PostH"

export default function PostsH() {
  return (
    <>
    <span className="heading">Hand Crafts</span>
    <div className="posts">
      
      {/* <PostH/> */}
     
      {HandCraftsItems.map((item) => (
                <>
                 <div className="Card card shadow mb-1">

                 <div  className="post">
                <img className="postImg" src={item.image} alt="" />
                
                <div className="postInfo">     {/* .postInfor + enter = div tag with classname*/}
                
                <span className="postTitle">{item.title}</span>

                <hr/>
                <p className="postDecription" id="p">{item.discription}</p>
                </div>
            

           
            </div>
            </div>

                </>
                
              ))}
           

           
  


    </div>
    </>
  )
}
