import { Box, Text } from "@chakra-ui/react";

export const ForcastBox = ({ children }) => {
    return (
        <Box className="zoom bg-dark-charcoal text-center overflow-hidden rounded-3xl h-48" shadow={'0px 0px 30px 6px #E2E2E2'}>
            {children}
        </Box>
    );
};

export const Newbox = ({ children }) => {
    return (
        <Box className="zoom bg-dark-charcoal rounded-3xl" overflow={'hidden'} shadow={'0px 0px 30px 6px #E2E2E2'} h={'300px'} >
            {children}
        </Box>
    );
};

export const Text1 = ({ children }) => {
    return (
        <Text className="text-white mt-[15px] text-lg font-medium">
            {children}
        </Text>
    );
};

export const Text2 = ({ children }) => {
    return (
        <Text className="font-medium text-lg text-white">
            {children}
        </Text>
    );
}