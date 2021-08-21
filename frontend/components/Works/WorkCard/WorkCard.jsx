import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function WorkCard({ work }) {
    console.log(work)

    return (
        <Box border="2px solid black" >
            <Image boxSize="200px" src={`http://localhost:1337${work.image.url}`} />



            <Flex justifyContent="center">
                <Text as="cite" fontSize="xl" py="3">
                    {work.title}
                </Text>

            </Flex>
            
            <Flex>
                {
                    work.categories.map(cat => (
                        <Box d="flex"
                            color="teal.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            mx="1"
                        >
                            {cat.name}
                        </Box>

                    ))
                }
            </Flex>

            <Flex>
                {
                    work.hashtags.map(hash => (
                        <Box d="flex"
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            mx="1"
                        >
                            {hash.name}
                        </Box>

                    ))
                }
            </Flex>

            <Flex justifyContent="end">
                <Text>{work.published_at}</Text>
            </Flex>
        </Box>
    )
}
