import React from "react"
import { Box, Button, HStack, Tag, TagLeftIcon, Text, Icon, Center, Image, VStack, SimpleGrid, Link, FormControl, FormLabel, Input, useDisclosure, FormHelperText, Heading, Divider, Stack, Flex } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon }
    from "@chakra-ui/icons"



function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)


    const handelCreate = () => {

        return (
            <>
                <Modal>
                    <FormControl>
                        <Heading>
                            Sign Up
                        </Heading>
                    </FormControl>
                </Modal>
            </>
        )

    }



    return (

        <Box >
            {/* sliding  */}
            <SimpleGrid>

                <Box bg="#6e7cbb" w="100%" textAlign={"center"} h="50px" position="absolute">

                    <HStack  >

                        <Tag bg="#6e7cbb" position="absolute" left="0px" top="10px">
                            <Button size={10}> <Icon as={ChevronLeftIcon} /></Button>
                        </Tag>
                        <Text position="absolute" left="50%" top="10px" textAlign="Center">slider</Text>
                        <Tag bg="#6e7cbb" position="absolute" right="0px" top="10px">
                            <Button size={10}><Icon as={ChevronRightIcon} /></Button>
                        </Tag>
                    </HStack>
                </Box>

                <Box bg="red.200" w={"100%"} position="absolute" mt="50px" h={8} alignItems={"center"}>
                    <HStack>
                        <Text variant={"teal"} color="teal" position="absolute" top={"0px"} right={40}>English</Text>

                        <Link onClick={onOpen} color="teal" position="absolute" top={"0px"} right={0}>
                            Sign In / Sign Up
                        </Link>



                        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader textAlign={"center"}>Sign In</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>

                                    <hr></hr>
                                    <br></br>
                                    <FormControl>
                                        <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
                                        <FormLabel mt={2}>Email address</FormLabel>
                                        <Input type='email' />
                                        <FormHelperText>We'll never share your email.</FormHelperText>
                                        <FormLabel mt={2}>Passwords</FormLabel>
                                        <Input type='password' />
                                        <Button w={"100%"} colorScheme='blue' mt={5}>Login</Button>
                                        <Button w={"100%"} colorScheme='blue' mt={5} onClick={handelCreate}  >Creat An Account</Button>
                                    </FormControl>

                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </HStack>

                </Box>
                <Box position={"absolute"} mt={9} left={"10px"} w="100%" padding={5} display={"Fle"}>
                    <Flex mt={9} alignItems={"center"}>
                        <Stack direction='row' h='90px' p={4} mt={3}>
                            <Divider orientation='vertical' />
                        </Stack>

                        <Link>

                            <Image position={"absolute"} left={"40px"}
                                src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" /></Link>


                        <Input placeholder="Search Anthropologie" width={10} position="absolute" right={5} w={"max-content"}
                            className="fa-fa-search" />
                    </Flex>
                    <hr w={"100%"}></hr>



                </Box>

                <Box></Box>

            </SimpleGrid>
        </Box>







    )

}

export default Navbar