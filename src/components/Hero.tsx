import { Heading, Box, Text } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
    <Box>
        <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="7.5vw"
        >
            {title}
        </Heading>
        <Text>
            Hi, this is the jnfgd jh kjghgfkj kjg gkgfj fkj dk ksjs kjs kjskjs
            kj sskj kjskjs kjs kjs j s kdsk kj k skj
        </Text>
    </Box>
);

Hero.defaultProps = {
    title: "Japroz Saini",
};
