import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FNHText from "../FNHText/index";

import { useNavigate } from "react-router-dom";

const FNHSearchPropertyRecCard = ({
  propertyId,
  name,
  ingredients,
  recipeDetails,
  recipeCate,
  eventType,
  backgroundImage,

}: FNHSearchPropertyCardProps) => {
  const [isFilled, setIsFilled] = React.useState(false);

  const handleFavoriteClick = (recipe: any) => {
    recipe.stopPropagation();
    if (recipe.type === "click") {
      setIsFilled(!isFilled);
    }
  };

  const navigate: any = useNavigate();

  const handleCardClick = () => {
    console.log("key", propertyId);

    navigate(`/recipe/${propertyId}`);
  };
  return (
    <Card
      onClick={handleCardClick}
      sx={{
        width: "20rem",
        height: "32rem",
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
              text={recipeCate}
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
              color="#046380"
              text={name}
              fontWeight="700"
              fontSize="0.875rem"
            />
            <FNHText
              color="#046380"
              text={recipeCate}
              fontWeight="700"
              fontSize="0.875rem"
            />
            <Box sx={{ marginTop: "1rem", display: "flex" }}>
              <FNHText
                color="#046380"
                text={recipeDetails}
                fontWeight="700"
                fontSize="0.875rem"
              />
            </Box>
          </Box>

          <Box sx={{ marginTop: "1rem", display: "flex" }}>
            <Box sx={{ marginLeft: "1rem", display: "flex" }}>
              <FNHText
                color="#1460BA"
                text={ingredients}
                fontWeight="700"
                fontSize="0.875rem"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FNHSearchPropertyRecCard;
