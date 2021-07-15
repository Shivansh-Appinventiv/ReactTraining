import React from "react";
import { Box } from "@material-ui/core";
import { motion } from "framer-motion";

function checkDirection(id) {
  const left = {
    x: "-100vw",
  };
  const down = {
    y: "100vh",
  };
  const right = {
    x: "100vw",
  };
  if (id % 3 === 1) {
    return left;
  } else if (id % 3 === 2) {
    return down;
  } else {
    return right;
  }
}

export default function Card(props) {
  const { restaurant } = props;
  const initial = checkDirection(restaurant.id);
  return (
    <motion.Box
      initial={initial}
      animate={{ x: 0, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Box>
        <img
          src={restaurant.photograph}
          alt={restaurant.name}
          height={200}
          width={400}
        />
      </Box>
      <Box>
        <Box>{restaurant.name}</Box>
        <Box>{restaurant.cuisine_type}</Box>
      </Box>
    </motion.Box>
  );
}
