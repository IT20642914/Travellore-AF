import "../commonCSS/singlepost.css"
import React,{useEffect, useState} from "react";
import HandCraftsItems from "../../../../constants/handcraftsitems";
import {useParams} from 'react-router-dom'
export default function Singlepost() {
  // const { id } = useParams();
  // const [selectId, setSelectId] = useState(id);
  // const [selectPost, setSelectPost] = useState(HandCraftsItems[0]);
  

  // useEffect(()=>{
  //   //alert("parm id "+id);
  //   console.log("parm id "+id);
  //   // HandCraftsItems.map((post)=>{
  //   //   if(post.key == selectId){
  //   //     setSelectPost(post);
  //   //   }
  //   // });
  // },[]);


  return (
    <div className='singlepost'>

      <div className="singlePostWrapper">
        <img className="singlepostImg" src="https://media.timeout.com/images/101852779/1024/576/image.jpg" alt="" />
        <hr/>
        <h1 className="singlepostTitle">Wood Pots</h1>
       
       
        <p className="singlepostdiscription1">
          
            Sri Lankan wood pots, also known as hatta in Sinhala language, are handcrafted pots made from a variety of woods, including teak, mahogany, and ebony. These pots are traditionally used for cooking, serving, and storing food, and are a common sight in Sri Lankan households and restaurants. The pots are made using a traditional process that involves carving and shaping the wood into the desired shape and size, and then polishing and finishing it with natural oils to enhance the wood's durability and shine. The unique characteristics of each type of wood used to make the pots give them distinct qualities, such as heat resistance, natural beauty, and durability. Sri Lankan wood pots are not only functional but also decorative, with intricate designs and patterns carved into the surface of the pots, making them popular as souvenirs and gifts for visitors to the country.
          
        </p>
        <p className="singlepostdiscription2">
          Sri Lankan wood pots, also known as hatta in Sinhala language, are handcrafted pots made from a variety of woods, including teak, mahogany, and ebony. These pots are traditionally used for cooking, serving, and storing food, and are a common sight in Sri Lankan households and restaurants. The pots are made using a traditional process that involves carving and shaping the wood into the desired shape and size, and then polishing and finishing it with natural oils to enhance the wood's durability and shine. The unique characteristics of each type of wood used to make the pots give them distinct qualities, such as heat resistance, natural beauty, and durability. Sri Lankan wood pots are not only functional but also decorative, with intricate designs and patterns carved into the surface of the pots, making them popular as souvenirs and gifts for visitors to the country.
          
        </p>
        <ul className="supliers">
          <div>
          <li className="suplier">Ambacca Mask Store</li>
          <li className="supAddress">22/1, Ambackcka Stores, Ambackcka</li>
          <li className="supContact">+36-4565678</li>
          </div>
          <div>
          <li className="suplier">Ambacca Mask Store</li>
          <li className="supAddress">22/1, Ambackcka Stores, Ambackcka</li>
          <li className="supContact">+36-4565678</li>
          </div>
          <div>
          <li className="suplier">Ambacca Mask Store</li>
          <li className="supAddress">22/1, Ambackcka Stores, Ambackcka</li>
          <li className="supContact">+36-4565678</li>
          </div>
          <div>
          <li className="suplier">Ambacca Mask Store</li>
          <li className="supAddress">22/1, Ambackcka Stores, Ambackcka</li>
          <li className="supContact">+36-4565678</li>
          </div>
          <div>
          <li className="suplier">Ambacca Mask Store</li>
          <li className="supAddress">22/1, Ambackcka Stores, Ambackcka</li>
          <li className="supContact">+36-4565678</li>
          </div>

        </ul>
       
      
      
      </div>
    </div>
  )
}
