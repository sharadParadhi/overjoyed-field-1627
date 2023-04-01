import React from "react"
import { Box, Button, HStack, Tag, TagLeftIcon, Text, Icon, Center, Image, VStack, SimpleGrid, Link, FormControl, FormLabel, Input, useDisclosure, FormHelperText, Heading, Boxider, Stack, Flex, InputGroup, InputLeftElement ,Spacer,Divider, Menu, MenuButton, MenuList, MenuItem, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, defineStyle }from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
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
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon, BiUser,FaShoppingCart ,BiCart}
    from "@chakra-ui/icons"
import { getActiveElement } from "@testing-library/user-event/dist/utils"
import { isDragActive } from "framer-motion"
    




function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const links = [
        { path: "/", text: "Home" },
        { path: "/topRated", text: "Top-Rated" },
        { path: "/clothing", text: "Clothing" },
        { path: "/dresses", text: "Dresses" },
        { path: "/shoes", text: "Shoes" },
        { path: "/Accessories", text: "Accessories" },
        { path: "/sale", text: "sale" }
    ]

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)






    return (

        <Box >
            {/* sliding  */}


            <Box >
                <HStack>
                    <Text variant={"teal"} color="teal" position="absolute" top={"0px"} right={40}>
                    <Menu>
<MenuButton>English</MenuButton>
<MenuList>
  <MenuItem>Frensh</MenuItem>
  <MenuItem>Spanish</MenuItem>
  <MenuItem>Korian</MenuItem>
</MenuList></Menu>
                    
                    </Text>

                 


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
                                    <Button w={"100%"} colorScheme='blue' mt={5}  >Creat An Account</Button>
                                </FormControl>

                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </HStack>

            </Box>
           
 
            <Box >
         
                <Flex mt={9} alignItems={"center"}>


                    <Link>

                        <Image position={"absolute"} left={"40px"}  marginBottom={9}
                            src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" /></Link>
                            <Spacer />
                    <InputGroup w={"250px"} marginRight={"100px"} >
                        <InputLeftElement  pointerEvents="none">
                            <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search..." />
                    </InputGroup>
                    

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
            <hr w={"100%" } ></hr>


          


        </Box>







    )
}

export default Navbar


