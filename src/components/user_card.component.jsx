import {
  Box,
  Image,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Skeleton,
} from "@chakra-ui/react";

export default function UserCard({
  first_name,
  last_name,
  email,
  avatar,
  loading,
}) {
  return (
    <Box
      w="100%"
      bg="white"
      shadow={"md"}
      rounded={"sm"}
      overflow={"hidden"}
      display={"flex"}
    >
      <Box boxSize={150} w={"25%"}>
        <Skeleton isLoaded={loading} w={"full"} h={"full"}>
          <Image src={avatar} objectFit={"cover"} w={"full"} h={"full"} />
        </Skeleton>
      </Box>

      <Skeleton isLoaded={loading} w={"75%"}>
        <Box p={5} w={"full"}>
          <TableContainer>
            <Table size={"sm"}>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Td>{first_name + " " + last_name}</Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th>Email</Th>
                  <Td>{email}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Skeleton>
    </Box>
  );
}
