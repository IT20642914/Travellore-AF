import "./singlepost.css"

export default function Singlepost() {
  return (
    <div className='singlepost'>

      <div className="singlePostWrapper">
        <img className="singlepostImg" src="https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg" alt="" />
        <hr/>
        <h1 className="singlepostTitle"> Paragraph In English Writing at Discoverthebest</h1>
        <div className="singlepostEdit">
             <i className="singlepostIcon fa-solid fa-pen-to-square"></i>
             <i className=" singlepostIcon fa-sharp fa-solid fa-trash"></i>
        </div> 
        <div className="singlepostInfo">
           <span className="singlepostAuthor">Author:<b>Sachini</b></span><br/>
           <span className="singlepostDate">1 hour ago</span>

        </div>
        <p className="singlepostdiscription">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Cumque labore animi, 
          possimus provident quidem fugiat nobis,
           ex cupiditate, ut esse magni architecto
            eveniet fuga perspiciatis? Temporibus 
            tempora eligendi quos culpa!
            Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Cumque labore animi, 
          possimus provident quidem fugiat nobis,
           ex cupiditate, ut esse magni architecto
            eveniet fuga perspiciatis? Temporibus 
            tempora eligendi quos culpa!
            Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Cumque labore animi, 
          possimus provident quidem fugiat nobis,
           ex cupiditate, ut esse magni architecto
            eveniet fuga perspiciatis? Temporibus 
            tempora eligendi quos culpa!
            Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Cumque labore animi, 
          possimus provident quidem fugiat nobis,
           ex cupiditate, ut esse magni architecto
            eveniet fuga perspiciatis? Temporibus 
            tempora eligendi quos culpa!
        </p>
      
      </div>
    </div>
  )
}
