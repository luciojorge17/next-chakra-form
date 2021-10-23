import { Box, Heading, Divider, Flex, Icon } from "@chakra-ui/react";

export function Subtitle({ text, icon }) {

    return (
        <Box my="6">
            <Flex align="center" mb="2">
                <Icon as={icon} mr="2" fontSize="3xl" color="green.300" />
                <Heading as="h2" fontSize="lg" fontWeight="medium" justify="center">
                    {text}
                </Heading>
            </Flex>
            <Divider borderColor="green.300" />
        </Box>
    )

}