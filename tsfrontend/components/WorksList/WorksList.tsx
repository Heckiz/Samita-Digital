import { Box, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import { dehydrate, QueryClient } from "react-query";
import { fetchWorks, useWorks } from "../../hooks/useWorks";
import { RootObject } from "../../interfaces/works.interface";
import WorkCard from "./WorkCard/WorkCard";

const WorksList: FC = () => {
  const { data, isLoading, isError } = useWorks();
  return isLoading ? (
    <Text>Loading ..</Text>
  ) : isError ? (
    <Text>Error</Text>
  ) : (
    <Box>
      {data.map((item: RootObject) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default WorksList;

export const getServerSideProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("works", fetchWorks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
