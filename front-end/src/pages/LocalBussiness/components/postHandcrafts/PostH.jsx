import "../commonCSS/post.css"
import {HandCraftsItems} from "../../../../constants/handcraftsitems"
export default function PostH() {
    return (
        <div className="post">
            {HandCraftsItems.map((item) => (
                <><img className="postImg" src={item.image} alt="" />
                <div className="postInfo">     {/* .postInfor + enter = div tag with classname*/}
                
                <span className="postTitle">{item.title}</span>

                <hr/>
                <p className="postDecription">{item.discription}
                
            </p>

            </div>

                </>
                
              ))}






             
            

        </div>




    )
}
