import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";

import FNHText from "../../Components/FNHText/index";

import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";


const FNHCard = ({
  category,
  name,
  price,
  houseType,
  backgroundImage,
  location,
  eventDetails,
}: FNHCardProps) => {
  const [isFilled, setIsFilled] = React.useState(false);

  const handleFavoriteClick = (event: any) => {
    event.stopPropagation();
    if (event.type === "click") {
      setIsFilled(!isFilled);
    }
  };

  const navigate: any = useNavigate();

  const handleCardClick = () => {
    // navigate("/property");
  };
  return (
    <Card className={styles.Card}
      onClick={handleCardClick}
      sx={{minWidth:"15rem"}}
  
      >
      
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "20rem",
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

        <Box
          sx={{
            position: "absolute",
            color: "primary",
            margin: "13.75rem 0 0 0.75rem ",
          }}
        >
         
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            height: "4rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "20%",
              textAlign: "start",
              height: "4rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
        
          </Box>
          <Box>
            <FNHText
              text={category}
              color="#046380"
              fontWeight="700"
              fontSize="1rem"
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display:"flex",
              minWidth: "50%",
              textAlign: "start",
              padding: "0 0 0 1rem",
            }}
          >
              <FNHText
              variant="h6"
              text="Rs."
              color="#046380"
              fontWeight="700"
            />
            <FNHText
              variant="h6"
              text={price}
              color="#046380"
              fontWeight="700"
            />
          </Box>
          <Box
            sx={{
              textAlign: "start",
            }}
          >
           
          </Box>
          
        </Box>
        <Box sx={{
              display:"flex",
              minWidth: "50%",
              textAlign: "start",
              padding: "0 0 0 1rem",
            }}>
        <FNHText  color="#046380 " text={eventDetails} fontWeight="700" fontSize="0.875rem" />
  
        </Box>
      </Box>
    </Card>
  );
};

export default FNHCard;
