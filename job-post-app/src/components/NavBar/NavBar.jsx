import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Box
        h="50px"
        position="absolute"
        top={0}
        left={0}
        m={0}
        bg="tomato"
        w="100%"
        p={4}
        color="white"
        fontFamily="Work sans"
        display="flex"
        justifyContent="space-evenly"
      >
        <Text fontSize={{ base: "30px", md: "30px" }}>Job Post App</Text> Job
        Listings
        <Link to={"/joblists"}>
          <Text
            textDecoration="none"
            fontSize={{ base: "30px", md: "30px" }}
          ></Text>
        </Link>
        <Text fontSize={{ base: "30px", md: "30px" }}>fdfdf</Text>
      </Box>
    </div>
  );
};

export default NavBar;
