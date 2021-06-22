import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { products } from "../products";

export default function ProductDetail(props) {
  console.log(props);
  let { id } = useParams();
  const item = products[id - 1];
  return (
    <Box className={`detailContainer`}>
      <Paper>
        <Box className={`productContainer`}>
          <Box className={`productImage`}>
            <img src={item.image} alt={item.title} height={`500px`} />
          </Box>
          <Box className={`productDetails`}>
            <Box>
              <Typography variant={`h3`}>{item.category}</Typography>
            </Box>
            <Box>
              <Typography variant={`h4`}>{item.title}</Typography>
            </Box>
            <Box>
              <Typography variant={`h5`}>{`${item.price} INR`}</Typography>
            </Box>
            <Box>
              <Typography variant={`h6`}>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
