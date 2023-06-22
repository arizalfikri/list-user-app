import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import bgLoginRegister from "../assets/bg-login-register.jpg";

export default function LoginLayout({ children }) {
  return (
    <Flex
      justify={"center"}
      minH={"100vh"}
      bg={"base.DEFAULT"}
      alignItems={"center"}
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        w={"full"}
        maxW={"55rem"}
        rounded={"md"}
        overflow={"hidden"}
        minH={"24rem"}
        shadow={"xl"}
        bg={"white"}
        m={"auto"}
      >
        <GridItem>
          <Box
            bgImage={bgLoginRegister}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            bgSize={"contain"}
            w={"full"}
            h={["96", "full"]}
          />
        </GridItem>

        <GridItem>
          <Flex h={"full"} justify={"center"} alignItems={"center"} p={10}>
            {children}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
