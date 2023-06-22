import { extendTheme } from "@chakra-ui/react";
import { mainFoundations } from "./foundations";
import { mainComponent } from "./components";

const breakpoints = ["30em", "48em", "62em", "80em", "96em"];

const overrides = {
  ...mainFoundations,
  breakpoints,
  components: {
    ...mainComponent,
  },
};

export default extendTheme(overrides);
