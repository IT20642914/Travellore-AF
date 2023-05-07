import React from "react";
import { Typography } from "@mui/material";

interface FNHTextProps {
  text?: string;
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | undefined;
  component?: any;
  fontWeight?: string;
  color?: string;
  fontSize?: string;
  textAlign?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
}
const FNHText = ({
  text,
  variant,
  component,
  fontWeight,
  color,
  fontSize,
  textAlign,
}: FNHTextProps) => {
  return (
    <Typography
      variant={variant}
      component={component}
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {text}
    </Typography>
  );
};

export default FNHText;
