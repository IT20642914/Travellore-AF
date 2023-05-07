// import React from "react";
// import { Box, Grid } from "@mui/material";
// import { useParams } from "react-router-dom";
// import Styles from "./styles.module.scss";
// import FNHText from "../../../Components/FNHText";
// import { Events } from "../../../constants";
// import { Googlemap } from "../../../Components/map/index";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { height } from "@mui/system";

// const RecipeDetails = () => {
//   const { propertyId } = useParams();

//   console.log("propertyId", propertyId);
//   const property = Events.find((p) => p.id === Number(propertyId));
//   if (!property) {
//     return <div>Property not found</div>;
//   }

//   const {
//     id,
//     name,
//     date,
//     time,
//     location,
//     description,
//     registrationLink,
//     price,
//     category,
//     image,
//     contactInfo,
//   } = property;

//   return (
//     <Grid className={Styles.DetailGrid}>
//       <Box className={Styles.HeaderText}>
//         <FNHText
//           text="Find Events.Today"
//           fontSize="3rem"
//           color="#046380"
//           textAlign="left"
//           variant="h6"
//         />
//       </Box>
//       <Box
//         sx={{
//           alignItems: "center",
//           justifyContent: "center",
//           display: "flex",
//           borderRadius: "2rem",
//           height: "60rem",
//           width: "100%",
//           margin: "4rem",
//           background: "linear-gradient(to bottom, #046380 0%, #012935 100%)",
//         }}
//       >
//         <Box
//           sx={{
//             display: { xs: "inline", sm: "flex" },
//             justifyContent: "space-evenly",
//             margin: "1rem 0",
//             padding: "0 1rem",
//           }}
//         >
//           <Box sx={{ display: "contents" }}>
//             <Card
//               sx={{
//                 width: "30rem",
//                 height: "50rem",
//                 borderRadius: "1rem",
//                 padding: "0.5rem",
//               }}
//             >
//               <Box
//                 sx={{
//                   margin: "1rem",
//                   justifyContent: "center",
//                   justifyItems: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <FNHText
//                   text={name}
//                   // color="#046380"
//                   textAlign="left"
//                   fontWeight="900"
//                   fontSize="2rem"
//                 />
//               </Box>
//               <Box
//                 sx={{
//                   backgroundImage: `url(${image})`,
//                   backgroundSize: "cover",
//                   backgroundRepeat: "no-repeat",
//                   height: "15rem",
//                   backgroundPosition: "center center",
//                   position: "relative",
//                   borderRadius: "1rem",
//                 }}
//               >
//                 {" "}
//               </Box>

//               <CardContent sx={{ padding: "0" }}>
//                 <Box
//                   sx={{
//                     backgroundColor: "transparent",
//                     display: "flex",
//                     justifyContent: "end",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       backgroundColor: "#fff",
//                       borderRadius: "5rem",
//                       padding: "0.25rem",
//                       margin: "0.5rem",
//                     }}
//                   ></Box>
//                 </Box>
//               </CardContent>

//               <Box
//                 sx={{
//                   padding: "0 0.5rem 0.5rem 0",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     height: "4rem",
//                     alignItems: "center",
//                     marginTop: "1rem",
//                   }}
//                 >
//                   <Box>
//                     <FNHText
//                       text={category}
//                       color="black"
//                       fontWeight="700"
//                       fontSize="1.5rem"
//                     />
//                   </Box>
//                 </Box>
//                 <Box sx={{ display: "flex", flexDirection: "column" }}>
//                   <Box
//                     sx={{
//                       textAlign: "start",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         textAlign: "center",
//                         justifyContent: "left",
//                         justifyItems: "center",
//                       }}
//                     >
//                       <LocationIcon fill="#1460BA" width="25" height="25" />
//                       <FNHText
//                         color="#046380"
//                         text={location}
//                         fontWeight="700"
//                         fontSize="1rem"
//                       />
//                     </Box>
//                     <Box sx={{ marginTop: "1rem", display: "flex" }}>
//                       <FNHText
//                         //  color="#046380"
//                         text="description:"
//                         fontWeight="900"
//                         fontSize="1rem"
//                       />

//                       <FNHText
//                         color="#046380"
//                         text={description}
//                         fontWeight="500"
//                         fontSize="1rem"
//                       />
//                     </Box>
//                   </Box>

//                   <Box sx={{ marginTop: "1rem", display: "flex" }}>
//                     <FNHText
//                       // color="#046380"
//                       text="Date: "
//                       fontWeight="700"
//                       fontSize="1rem"
//                     />

//                     <FNHText
//                       color="#046380"
//                       text={date}
//                       fontWeight="700"
//                       fontSize="1rem"
//                     />
//                     <Box sx={{ marginLeft: "1rem", display: "flex" }}>
//                       <FNHText
//                         // color="#046380"
//                         text="Time:"
//                         fontWeight="700"
//                         fontSize="1rem"
//                       />
//                       <FNHText
//                         color="#046380"
//                         text={time}
//                         fontWeight="700"
//                         fontSize="1rem"
//                       />
//                     </Box>
//                   </Box>
//                   <Box
//                     sx={{
//                       minWidth: "50%",
//                       textAlign: "start",
//                       margin: "0 0 0 0",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyItems: "center",
//                     }}
//                   >
//                     <FNHText
//                       fontSize="1rem"
//                       text="Rs: "
//                       color="black"
//                       fontWeight="700"
//                     />
//                     <FNHText
//                       fontSize="1rem"
//                       text={price}
//                       color="#046380"
//                       fontWeight="700"
//                     />
//                   </Box>

//                   <Box sx={{ display: "flex" }}>
//                     <FNHText
//                       fontSize="1rem"
//                       text="Registration Link : "
//                       // color="#046380"
//                       fontWeight="700"
//                     />
//                     <FNHText
//                       fontSize="1rem"
//                       text={registrationLink}
//                       color="#046380"
//                       fontWeight="700"
//                     />
//                   </Box>
//                   <Box
//                     sx={{
//                       justifyContent: "center",
//                       justifyItems: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <FNHText
//                       text="contact Information"
//                       // color="#046380"
//                       fontSize="2rem"
//                       fontWeight="700"
//                     />
//                   </Box>
//                   <Box sx={{ display: "flex" }}>
//                     <FNHText
//                       fontSize="1rem"
//                       text="contact Name  :"
//                       // color="#046380"
//                       fontWeight="700"
//                     />
//                     <FNHText
//                       fontSize="1rem"
//                       text={contactInfo.name}
//                       color="#046380"
//                       fontWeight="700"
//                     />
//                   </Box>
//                   <Box sx={{ display: "flex" }}>
//                     <FNHText
//                       fontSize="1rem"
//                       text="contact phone Number  :"
//                       // color="#046380"
//                       fontWeight="700"
//                     />
//                     <FNHText
//                       fontSize="1rem"
//                       text={contactInfo.phone}
//                       color="#046380"
//                       fontWeight="700"
//                     />
//                   </Box>
                 
//                 </Box>
//               </Box>
//             </Card>
//           </Box>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default RecipeDetails;
