import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">About Me </span>
                <img  src="https://w7.pngwing.com/pngs/175/718/png-transparent-dentistry-health-therapy-face-thinking-girl-face-plan-dentistry-thumbnail.png" alt=""></img>
                <p>
                    Like a scene in a movie or a verse in a song, paragraphs are the building blocks of any good piece of writing. Paragraphs lend a natural rhythm to your writing that makes it a joy to read. The question is, how do you handle them successfully?
                    Below, we take a close look at what makes up an effective paragraph and explain how to write one that suits your needs. We also cover some advanced tips. But first, lets start with the fundamentals.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cenema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Following Us</span>
                
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>


            </div>

        </div>



    )
}
