import { Grid, Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../products";

export default function DashBoard() {
  return (
    <Box className={`sectionContainer`}>
      <Grid container spacing={3}>
        {products.map((item, index) => {
          return (
            <Grid item xs={4}>
              <Link to={`/dashboard/${item.id}`}>
                <Paper key={item.id}>
                  <Box className={`cardContainer`}>
                    <Box>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`cardImage`}
                      />
                    </Box>
                    <Box className={`cardTitle`}>
                      <Typography variant={`h5`}>{item.title}</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
