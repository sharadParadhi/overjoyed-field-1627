import React from "react"
import { Box, Button, HStack, Tag, TagLeftIcon, Text, Icon, Center, Image, VStack, SimpleGrid, Link, FormControl, FormLabel, Input, useDisclosure, FormHelperText, Heading, Boxider, Stack, Flex, InputGroup, InputLeftElement, Spacer, Divider, Menu, MenuButton, MenuList, MenuItem, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, defineStyle } from "@chakra-ui/react"
import { NavLink, useNavigate } from "react-router-dom"
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
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, BiUser, FaShoppingCart, BiCart }
    from "@chakra-ui/icons"
import { getActiveElement } from "@testing-library/user-event/dist/utils"
import { isDragActive } from "framer-motion"

import { BiCartAlt } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi"



import {
    InputRightElement,
    useColorModeValue,

} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';






function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()

    const links = [
        { path: "/", text: "Home" },
        { path: "/topRated", text: "Top-Rated" },
        { path: "/clothing", text: "Clothing" },
        { path: "/dresses", text: "Dresses" },
        { path: "/shoes", text: "Shoes" },
        { path: "/Accessories", text: "Accessories" },
        { path: "/gifts", text: "Gifts & Candless" },
        { path: "beauty", text: "Beauty & Wellness" },
        { path: "furniture", text: "Home Furniture" },
        { path: "/sale", text: "Sale" }
    ]

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)





    return (

        <Box pos={"sticky"}>
            {/* sliding  */}


            <Box bg="orange.50">
                <HStack bg="orange.50">
                    <Text variant={"teal"} color="teal" position="absolute" top={"0px"} right={40}>
                        <Menu>
                            <MenuButton>English</MenuButton>
                            <MenuList>
                                <MenuItem>Frensh</MenuItem>
                                <MenuItem>Spanish</MenuItem>
                                <MenuItem>Korian</MenuItem>
                            </MenuList></Menu>

                    </Text>




                    <Link onClick={() => navigate("/signin")} pos={"absolute"} color="teal" top={"0px"} ml={3} right={0}>

                        Sign In / Sign Up
                    </Link>




                    {/* <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
                                    <Button w={"100%"} colorScheme='blue' mt={5} onClick={() => navigate("/signup")}
                                    >Creat An Account</Button>
                                </FormControl>

                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal> */}

                </HStack>

            </Box>


            <Box >

                <Flex mt={9} alignItems={"center"}>


                    <Link>

                        <Image position={"absolute"} left={"40px"} marginBottom={9}
                            src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" /></Link>
                    <Spacer />
                    <InputGroup w={"250px"} marginRight={"100px"} >
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search..." />
                    </InputGroup>


                    <Menu>
                        <MenuButton bg={"none"} color={"teal"}
                            as={IconButton}
                            aria-label='Options'
                            icon={< BiCartAlt />}

                        />
                        <Link to="/cart" color={"teal"} onClick={() => navigate("/cart")}>Cart</Link>

                    </Menu>






                </Flex>
                <hr w={"100%"}></hr>

            </Box>

            <Box w={"80%"} padding={5}>
                <Flex alignItems={"center"} justifyContent={"space-evenly"}>
                    {links.map((ele) => (
                        <NavLink key={ele.path}
                            to={ele.path}
                        >
                            {ele.text}
                        </NavLink>
                    ))}
                </Flex>
            </Box>
            <hr w={"100%"} ></hr>





        </Box>







    )
}

export default Navbar


