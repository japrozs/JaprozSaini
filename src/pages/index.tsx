import {
    Flex,
    Heading,
    Text,
    Box,
    List,
    ListItem,
    Image,
    ListIcon,
    Button,
    Spacer,
    Center,
    Input,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ReactMarkdown from "react-markdown";

const Index = () => {
    const markdown =
        "![Japroz's GitHub stats](https://github-readme-stats.vercel.app/api?username=japrozs&show_icons=true&theme=radical)";

    return (
        <>
            <Center paddingBottom="0px" paddingTop="20px">
                <Image width="90px" src="/logo.svg" />
            </Center>
            <Box padding={{ base: "20px", lg: "5vw" }}>
                <Flex
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box marginTop="30px">
                        <Heading
                            bgGradient="linear(to-l, #7928CA, #FF0080)"
                            bgClip="text"
                            fontSize="7.5vw"
                        >
                            I'm Japroz Saini
                        </Heading>
                        <Text width="md" fontSize="20px" color="gray">
                            I'm a{" "}
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                Full Stack Engineer
                            </span>{" "}
                            and a{" "}
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                Designer
                            </span>
                            . I can code in{" "}
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                Python
                            </span>
                            ,
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                TypeScript
                            </span>
                            ,
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                JavaScript
                            </span>
                            ,
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                Java
                            </span>{" "}
                            and{" "}
                            <span style={{ color: "#fff", fontWeight: "bold" }}>
                                C{" "}
                            </span>
                            . I love to create amazing websites and software
                            that helps developer in their daily tasks and
                            increase their productivity.
                        </Text>
                    </Box>
                    <Spacer />
                    <Image width="sm" src="/illus.png" />
                </Flex>
                <Button marginTop={{ base: "4vh", lg: "-10px" }}>
                    Get in touch
                </Button>
            </Box>
            <Center>
                <hr style={{ width: "60vw" }} />
            </Center>
            <Box>
                <Center>
                    <Text
                        fontWeight="bold"
                        color="lightgray"
                        fontSize={{ base: "4vw", lg: "2vw" }}
                        marginTop="20px"
                    >
                        PROFICIENT IN
                    </Text>
                </Center>
                <Flex
                    width="100vw"
                    flexWrap="wrap"
                    padding="5vw"
                    justifyContent="center"
                >
                    <List spacing={3} my={0} px="5vw" paddingBottom="5vw">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            TypeScript
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            NodeJS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            JavaScript
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            HTML5
                        </ListItem>
                    </List>
                    <List spacing={3} my={0} px="5vw" paddingBottom="5vw">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            CSS3
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            ReactJS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Python
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />C
                        </ListItem>
                    </List>
                    <List spacing={3} my={0} px="5vw" paddingBottom="5vw">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Rust
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Java
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Shell
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            VSCode
                        </ListItem>
                    </List>
                    <List spacing={3} my={0} px="5vw" paddingBottom="5vw">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Next.JS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            PostGreSQL
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Firebase
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Digital Ocean
                        </ListItem>
                    </List>
                    <List spacing={3} my={0} px="5vw" paddingBottom="5vw">
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Chakra-UI
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Material-UI
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            Full Stack
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            BackEnd
                        </ListItem>
                    </List>
                </Flex>
                <Center padding="20px" paddingTop="-10px">
                    <ReactMarkdown children={markdown} />
                </Center>
            </Box>
            <Center>
                <hr style={{ width: "60vw" }} />
            </Center>
            <Box padding="40px">
                <Center margin="10px">
                    <Heading
                        bgGradient="linear(to-l, #278ea5, #21e6c1)"
                        bgClip="text"
                        fontSize={{
                            base: "6vw",
                            sm: "6vw",
                            md: "6vw",
                            lg: "6vw",
                        }}
                    >
                        Get in touch
                    </Heading>
                </Center>
                <Center paddingBottom="40px">
                    <Input
                        type="email"
                        placeholder="Emil Address"
                        width={{ base: "90vw", md: "50vw", lg: "40vw" }}
                    />
                    <Button
                        width={{ base: "90px", md: "10vw", lg: "10vw" }}
                        mx="2vw"
                        px="10px"
                    >
                        Submit
                    </Button>
                </Center>
            </Box>
            <Box padding="20px" width="100vw" backgroundColor="blackAlpha.600">
                <Center padding="30px">
                    <Image width="90px" src="/logo.svg" />
                </Center>
                <Flex wrap="wrap" justifyContent="center">
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Github
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Facebook
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Twitter
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Dev.to
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        sainijaproz@gmail.com
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Privacy Policy
                    </Text>
                    <Text
                        _hover={{ color: "white", cursor: "pointer" }}
                        color="gray"
                        px="10px"
                    >
                        Terms and conditions
                    </Text>
                </Flex>
            </Box>
        </>
    );
};

export default Index;
