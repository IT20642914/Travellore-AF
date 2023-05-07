import "./sidebar.css";
import {  Routes, Route , Link  } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebarItem">
                <span className="sidebarTitle">Explore Categories </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><Link to ="/lb/kulubadu"  style={{textDecoration:"none", color:"inherit" }}>Spices</Link></li>
                    <li className="sidebarListItem"><Link to ="/lb/rubber"  style={{textDecoration:"none", color:"inherit" }}>Rubber Products</Link></li>
                    <li className="sidebarListItem"><Link to ="/lb/tea"  style={{textDecoration:"none", color:"inherit" }}>Tea Products</Link></li>
                    <li className="sidebarListItem"><Link to ="/lb/handcrafts"  style={{textDecoration:"none", color:"inherit" }}>Hand Crafts</Link></li>
                    <li className="sidebarListItem">Other</li>
                    
                </ul>
            </div>


            <div className="sidebarItem">
                <span className="sidebarTitle">Local Products </span>
                <img  src="https://whoweare.lk/wp-content/uploads/2021/03/7-56.jpg" alt=""></img>
                <p>
                Sri Lanka is popular for its diverse range of local products, ranging from handcrafted items to agricultural products.
                 Sri Lankan tea is one of the most popular and globally recognized local products, produced in the country's lush tea plantations.
                  Sri Lanka's handcrafted items such as wood carvings, batik textiles, and jewelry, are also famous for their unique designs and intricate details. 
                  Coconut-based products, including oil, milk, and other household items, are also popular due to the abundance of coconut trees in the country. Sri Lanka's gemstone
                   industry is another well-known local product, with the country being a significant source of high-quality gems such as sapphires, rubies, and topaz. Additionally,
                    Sri Lanka's spices and 
                Ayurvedic products, including essential oils and herbal remedies, 
                are also sought after for their health benefits and natural ingredients.
                 Overall, Sri Lanka's local products showcase the country's rich culture,
                  history, and natural resources, making them popular among tourists and locals alike.
                </p>
                <img  src="https://news.microsoft.com/wp-content/uploads/prod/sites/43/2022/01/FINAL_Sri-Lanka-Tea-Industry-Momentum_Blog-Image_26-Jan-2022-scaled.jpg" alt=""></img>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnA5Tw6473fFQqxSIfV6m0FyCJOPxUqSkV0A&usqp=CAU" alt=""></img>
                <img  src="https://whoweare.lk/wp-content/uploads/2021/03/7-56.jpg" alt=""></img>
            </div>

            

           

        </div>



    )
}
