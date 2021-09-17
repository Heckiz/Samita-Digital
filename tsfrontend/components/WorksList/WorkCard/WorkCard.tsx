import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { RootObject } from "../../../interfaces/works.interface";

const WorkCard: FC<{ item: RootObject }> = ({ item }) => {
  console.log(item);
  return <Box></Box>;
};

export default WorkCard;
