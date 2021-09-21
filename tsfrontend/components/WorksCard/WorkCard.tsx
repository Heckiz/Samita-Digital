import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  Category,
  Hashtag,
  RootObject,
} from "../../interfaces/works.interface";

const WorkCard: FC<{ item: RootObject }> = ({ item }) => {
  console.log(item);
  return (
    <Flex
      flexDirection="column"
      height="50vh"
      alignItems="center"
      justifyContent="space-around"
      border="2px solid black"
    >
      <Text h="10%">{item.title}</Text>
      <Image
        h="75%"
        objectFit="cover"
        alt="image"
        src={`http://localhost:1337${item.image.url}`}
      />
      <Flex h="15%" flexDirection="column">
        <Flex my="1">
          {item.hashtags.map((hash: Hashtag, indexHashtag: number) => (
            <Flex
              key={indexHashtag}
              color="blue.300"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              mx="1"
            >
              <Text>{hash.name}</Text>
            </Flex>
          ))}
        </Flex>
        <Flex justifyContent="space-between" border="2px solid black">
          {item.categories.map((category: Category, indexCategory: number) => (
            <Box
              key={indexCategory}
              d="flex"
              color="gray.600"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              mx="1"
              as="samp"
            >
              {category.name}
            </Box>
          ))}
          <Text as="samp" fontSize="xs" color="gray.500">
            {item.published_at}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
