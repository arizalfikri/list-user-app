import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Thead,
  Tbody,
  Image,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
} from "@chakra-ui/react";
import Pagination from "../components/pagination.component";
import UserCard from "../components/user_card.component";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleGetdata = () => {
    setLoading(false);
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        const { data, page: newPage, total_pages } = response?.data;

        setData(data);
        setPage(newPage);
        setTotalPage(total_pages);
        setLoading(true);
      })
      .catch((error) => console.log(error, "error"));
  };
  const handleNavigate = (id) => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    handleGetdata();
  }, []);
  useEffect(() => {
    handleGetdata();
  }, [page]);

  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      align={"center"}
      px={["1rem", "6rem"]}
      py={"2rem"}
      bg={"base.DEFAULT"}
      flexDir={"column"}
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={5}
        w={"full"}
        maxW={"80rem"}
      >
        {data.map((e, i) => (
          <GridItem
            key={i}
            cursor={"pointer"}
            _hover={{
              shadow: "xl",
            }}
            onClick={() => handleNavigate(e.id)}
          >
            <UserCard
              first_name={e.first_name}
              last_name={e.last_name}
              avatar={e.avatar}
              email={e.email}
              loading={loading}
            />
          </GridItem>
        ))}
      </Grid>

      <Box mt={10} w={"full"}>
        <Pagination setPage={setPage} page={page} totalPage={totalPage} />
      </Box>
    </Flex>
  );
}
