import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginLayout from "../layout/Login.layout";

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("email", data.email);
    toast({
      title: "Logged in successfully.",
      position: "top-right",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/users");
  };

  return (
    <LoginLayout>
      <form action="" onSubmit={handleSubmit}>
        <Text
          fontSize={"xl"}
          textTransform={"capitalize"}
          mb={5}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          login
        </Text>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="type your email"
            border={0}
            borderBottom={"2px"}
            borderColor={"gray.300"}
            rounded={0}
            name="email"
            p={2}
            w={"full"}
            onChange={handleChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="type your password"
            border={0}
            borderBottom={"2px"}
            borderColor={"gray.300"}
            rounded={0}
            name="password"
            p={2}
            w={"full"}
            onChange={handleChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>

        <Button type="submit" variant={"base"} w={"full"} mt={2}>
          login
        </Button>
      </form>
    </LoginLayout>
  );
}
