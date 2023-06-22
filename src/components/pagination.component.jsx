import { Flex, Box } from "@chakra-ui/react";

// icon
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

export default function Pagination({ page, setPage, totalPage }) {
  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <>
      {totalPage > 1 ? (
        <Flex align={"center"} gap={2} m={"auto"} w={"fit-content"}>
          <Box
            _hover={{
              bg: "gray",
            }}
          >
            <BiSkipPrevious
              size={26}
              cursor={page > 1 ? "pointer" : "not-allowed"}
              onClick={() => (page > 1 ? setPage(page - 1) : null)}
            />
          </Box>

          {Array.from({
            length: totalPage === 0 ? 1 : totalPage,
          })
            .map((el, index) => (el = index + 1))
            .slice(page > 1 ? page - 2 : 0, page + 1)
            .map((num, i) => (
              <Box
                onClick={() => handleClick(num)}
                key={num}
                bg={page === num ? "primary.DEFAULT" : "white"}
                textColor={page === num ? "white" : null}
                cursor={"pointer"}
                w={6}
                h={6}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                shadow={"sm"}
                rounded={"full"}
              >
                {num}
              </Box>
            ))}

          <Box
            _hover={{
              bg: "gray",
            }}
          >
            <BiSkipNext
              size={26}
              cursor={page < totalPage ? "pointer" : "not-allowed"}
              onClick={() => (page < totalPage ? setPage(page + 1) : null)}
            />
          </Box>
        </Flex>
      ) : null}
    </>
  );
}
