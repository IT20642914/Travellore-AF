import React, { useState } from "react";
import Kulubadu from "../kulubadu/Kulubadu"
import Handcraft from "../postHandcrafts/Handcraft"
import Box from '@mui/material/Box';

export default function () {

    const [page, setPage] = useState("home");


    const handleClick = (pageName) => {
        setPage(pageName);
      };



  return (
    <div>
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" onClick={()=>{ handleClick("k")}} href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={()=>{ handleClick("h")}} href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
<Box>
    aaaaaaaaaaaaaaaaaaaaaa
               {page === "k" && <Kulubadu/>}
               {page === "h" && <Handcraft/>}
              
      </Box>

    </div>
  )
}
