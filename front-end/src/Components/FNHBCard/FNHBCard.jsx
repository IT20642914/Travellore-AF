import { Card, CardContent, Box } from "@mui/material";
import React from "react";
import FNHText from "../FNHText";

interface FNHBCardProps {
  imageURL: string;
  count: string;
  text: string;
}

const FNHBCard = ({ imageURL, count, text }: FNHBCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: "0.5rem",
        minWidth: "8rem",
        minHeight: "12rem",
        background:
        "linear-gradient(323.85deg, #012935.14%, #046380 99.41%, #012935 99.41%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "inline",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ paddingBottom: "1rem" }}>
            <img src={imageURL} alt="ss" style={{ display: "center" }} />
          </Box>
          <Box>
            <FNHText
              text={count}
              color="#ffff"
              textAlign="center"
              fontSize="1.3rem"
              fontWeight="600"
            />
          </Box>
          <Box>
            <FNHText
              text="Total"
              color="#ffff"
              textAlign="center"
              fontSize="0.8rem"
              fontWeight="300"
            />
            <FNHText
              text={text}
              color="#ffff"
              textAlign="center"
              fontSize="0.8rem"
              fontWeight="300"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FNHBCard;
