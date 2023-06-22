import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/users");
  };
  return (
    <Flex minH={"100vh"} justify={"center"} align={"center"}>
      <Box textAlign={"center"}>
        <Text fontSize={"7xl"} fontWeight={"semibold"}>
          404
        </Text>
        <Text>
          Page&nbsp;not&nbsp;found&nbsp;go&nbsp;
          <span className="back" onClick={handleNavigate}>
            Back
          </span>
          &nbsp;at&nbsp;home
        </Text>
      </Box>
    </Flex>
  );
}
