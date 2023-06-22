import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    textTransform: "capitalize",
  },
  variants: {
    base: {
      bg: "primary.DEFAULT",
      color: "white",
      rounded: "full",
      _hover: {
        bg: "primary.600",
      },
    },
  },
});
