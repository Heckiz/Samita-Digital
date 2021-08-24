import { Box, Flex, Image, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'

export default function WorkCard({ work }) {
    console.log(work)

    return (
        <Box 
        p="2" bg="#FEF9E7" 
        rounded="lg" border="1px solid #F9E79F"
        _hover={{
            border:"2px solid #F7DC6F",
            transitionDuration: '0.5s',
            transform:"scale(1.03)"
        }}>


            <Image 
            my="2"
            boxSize={{base:"300px", lg:"220px"}} 
            src={`http://localhost:1337${work.image.url}`} 
            />

            <Flex justifyContent="center" borderY="2px solid #F1C40F">
                <Text as="cite" fontSize="xl">
                    {work.title}
                </Text>

            </Flex>

            <Flex my="1">
                {
                    work.hashtags.map(hash => (
                        <Box d="flex"
                            color="blue.300"
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

            <Flex justifyContent="space-between" mt="4">
            {
                    work.categories.map(cat => (
                        <Box d="flex"
                            color="gray.600"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            mx="1"
                            as="samp"
                        >
                            {cat.name}
                        </Box>

                    ))
                }
                <Text as="samp" fontSize="xs" color="gray.500">{moment(work.published_at).format('L')}</Text>
            </Flex>

            
        </Box>
    )
}
