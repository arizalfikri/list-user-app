import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import UserCard from "../components/user_card.component";

import { AiFillBackward } from "react-icons/ai";

export default function UserDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    setLoading(false);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        const { data: newData } = response.data;

        setData(newData);
        setLoading(true);
      })
      .catch((error) => console.log(error, "error"));
  }, []);

  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      flexDir={"center"}
      bg={"base.DEFAULT"}
      px={"1rem"}
    >
      <Box maxW={"50rem"} w={"full"} m={"auto"}>
        <Box
          mb={5}
          cursor={"pointer"}
          w={"fit-content"}
          alignItems={"center"}
          display={"flex"}
          gap={3}
          _hover={{
            color: "blue",
          }}
          onClick={handleNavigate}
        >
          <AiFillBackward size={20} />
          <Text>Back</Text>
        </Box>

        <UserCard
          loading={loading}
          email={data.email}
          first_name={data.first_name}
          last_name={data.last_name}
          avatar={data.avatar}
        />
      </Box>
    </Box>
  );
}
