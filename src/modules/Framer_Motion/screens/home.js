//import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import Card from "../components/card";
import restaurants from "../restaurants.json";

export default function Home() {
  console.log(restaurants);
  return (
    <Box>
      <Box style={{ width: "600px", margin: "0 auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.Box
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={"https://www.cityhutdhaba.com/img/about/3.svg"}
              alt={"Dining_Image"}
              width={"100"}
            />
          </motion.Box>
          <motion.Box
            initial={{ y: "-100vh" }}
            animate={{ y: 0, type: "spring", stiffness: "120" }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Typography variant={"h4"}>{`Restaurant Finder`}</Typography>
          </motion.Box>
          <motion.Box
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={
                "https://previews.123rf.com/images/andyadi/andyadi1812/andyadi181200055/114214113-chef-hat-food-restaurant-vector-icon-logo-design-template.jpg"
              }
              alt={"crockery_Image"}
              width={"100"}
            />
          </motion.Box>
        </Box>
      </Box>
      <Box>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2} style={{ margin: "8px" }}>
            {restaurants.restaurants.map((restaurant, index) => {
              return (
                <Grid container item xs={12} sm={6} lg={4} key={index}>
                  <Card restaurant={restaurant} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
