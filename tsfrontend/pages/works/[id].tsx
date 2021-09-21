import { Box, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getWorks, useWorkId } from "../../hooks/useWorks";

const Details: NextPage<{ id: string }> = ({ id }) => {
  const { data, isLoading } = useWorkId(id);
  console.log(data, isLoading);
  return (
    <Box>
      <Text>detail</Text>
    </Box>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getWorks();
  const paths = data.map((work) => ({ params: { id: "" + work.id } }));
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  return { props: { id } };
};
