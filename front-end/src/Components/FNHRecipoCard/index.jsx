import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FNHText from "../FNHText/index";

import { useNavigate } from "react-router-dom";




const FNHSearchPropertyCard = ({
  propertyId,
  eventTopic,
  eventDetails,
  communityBy,
  eventType,
  backgroundImage,
  price,
  address,
  date,
  time,
  location,

}: FNHSearchPropertyCardProps) => {
  const [isFilled, setIsFilled] = React.useState(false);

  const handleFavoriteClick = (event: any) => {
    event.stopPropagation();
    if (event.type === "click") {
      setIsFilled(!isFilled);
    }
  };

  const navigate: any = useNavigate();

  const handleCardClick = () => {
    console.log("key",propertyId)

    navigate(`/event/${propertyId}`);
  };
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: "20rem",
        height: "30rem",
        borderRadius: "1rem",
        padding: "0.5rem",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "15rem",
          backgroundPosition: "center center",
          position: "relative",
          borderRadius: "1rem",
        }}
      >
        <CardContent sx={{ padding: "0" }}>
          <Box
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "5rem",
                padding: "0.25rem",
                margin: "0.5rem",
              }}
            >
              <FavoriteIcon
                color="error"
                sx={{
                  color: isFilled ? "red" : "transparent",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  display: "flex",
                }}
                onClick={handleFavoriteClick}
              />
            </Box>
          </Box>
        </CardContent>
      </Box>

      <Box
        sx={{
          padding: "0 0.5rem 0.5rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "4rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Box>
            <FNHText
              text={eventTopic}
              color="black"
              fontWeight="700"
              fontSize="1.5rem"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              textAlign: "start",
            }}
          > 
            <FNHText
            //color="#1460BA"
              text={location}
              fontWeight="700"
              fontSize="0.875rem"
            />
               <Box sx={{marginTop:"1rem",display:"flex"}}>
             <FNHText
            //  color="#1460BA"
              text={eventDetails}
              fontWeight="700"
              fontSize="0.875rem"
            />
            </Box>
            </Box>
          
    <Box sx={{marginTop:"1rem",display:"flex"}}>

    <FNHText
              color="#1460BA"
              text= {date}
              fontWeight="700"
              fontSize="0.875rem"
            />
             <Box sx={{marginLeft:"1rem", display:"flex"}}>
             <FNHText
              color="#1460BA"
              text= {time}
              fontWeight="700"
              fontSize="0.875rem"
            />
            </Box>
    </Box>
    
          <Box
            sx={{
              textAlign: "start",
              marginBottom: "0.5rem",
            }}
          >
            <FNHText text={address} fontWeight="400" fontSize="0.75rem" />
          </Box>
          <Box
            sx={{
              minWidth: "50%",
              textAlign: "start",
              margin: "0 0 2rem 0",
              display:"flex"
            }}
          >
            <FNHText
              fontSize="1rem"
              text="Rs  "
              color="black"
              fontWeight="700"
            />
            <FNHText
              fontSize="1rem"
              text={price}
              color="#1460BA"
              fontWeight="700"
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FNHSearchPropertyCard;
