import { Grid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { dehydrate, QueryClient } from "react-query";
import WorkCard from "../../components/WorksCard/WorkCard";
import { getWorks, useWorks } from "../../hooks/useWorks";
import { RootObject } from "../../interfaces/works.interface";

const WorksList: FC = () => {
  const { data, isLoading, isError } = useWorks();
  return isLoading ? (
    <Text>Loading ..</Text>
  ) : isError ? (
    <Text>Error</Text>
  ) : (
    <Grid
      gap={5}
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      justifyContent="center"
      alignItems="center"
      h="100vh"
      margin="10%"
    >
      {data?.map((item: RootObject) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default WorksList;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("works", getWorks);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
