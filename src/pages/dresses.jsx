
// http://localhost:8000/dresses/

import { Box, Button, ButtonGroup, Card, Divider, Flex, Grid, HStack, Heading, MenuOptionGroup, Select, SimpleGrid, Spacer, Stack, Text, } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React, { useState, useEffect, useReducer} from "react"
import CardProduct from "./CardPage"
import axios from "axios"
import { useContext } from 'react'
import {Authcontext} from "../Context/AuthContext"
import data from "../db"

function Dresses(){
    const [products,setProducts]=useState(data)

    async function getData(){
        fetch("http://localhost:8080/dresses")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error('Error:', err);
        });
    }

    useEffect(()=>{
        getData()
    },[])


     const handelClick=()=>{

    }

    const handleCart=()=>{

    }

    return (
        <Box w={"100%"} m={"auto"}  >
            <Box m={"auto"} w={"95%"} >


                <Box mt={5} bg="red.10">
                    <Flex alignItems={"center"} justifyContent={"space-evenly"} justifyItems={"center"} padding={5} >
                        <Button m={2} left={0} padding={8}bg="red.50"><Link>WEDDING GUEST DRESSES</Link></Button>
                        <Button m={2} padding={8} bg="red.50"><Link> CAUSAL DRESSES</Link></Button>
                        <Button m={2} padding={8} bg="red.50"><Link> PARTY DRESSES</Link></Button>
                        <Button m={2} padding={8} bg="red.50"><Link>WORK DRESSES</Link></Button>
                        <Button m={2} padding={8} bg="red.50"><Link> VACTION DRESSES</Link></Button>
                        <Button padding={8} bg="red.50"><Link > FROMAL DRESSES</Link></Button>
                    </Flex>
                    <hr></hr>
                </Box>


                <Box w={"100%"}>
                    <SimpleGrid display={"flex"}>
                        <Box w={"21%"} bg={"orange.50"}>
                            <Stack mb={3}>
                                <Text> Browse By:</Text>
                                <hr></hr>
                                <Link>Cocktail & Party Dresses</Link>
                                <Link>Lounge & Casual Dresses</Link>
                                <Link>Little White Dresses</Link>
                                <Link>Maxi Dresses</Link>
                                <Link>Midi Dresses</Link>
                                <Link>Mini & Tunic Dresses</Link>
                                <Link>Jumpsuits</Link>

                                <br></br>
                                <Text>Filter By:</Text>
                                <Text>Price :</Text>
                                <hr></hr>
                                <Link onClick={()=>handelClick(25,50)}>$25-$50</Link>
                                <Link onClick={()=>handelClick(50,100)}>$50-$100</Link>
                                <Link onClick={()=>handelClick(100,150)}>$100-$150</Link>
                                <Link onClick={()=>handelClick(150,200)}>$150-$200</Link>
                                <Link onClick={()=>handelClick(200)}>More than $200</Link>

                                <Text>Brand :</Text>
                                <hr></hr>
                                <Link >Levis</Link>
                                <Link>Allen Solly</Link>
                                <Link>H&M</Link>
                                <Link >Nike</Link>
                                <Link >ADiDAs</Link>


                            </Stack>

                        </Box>
                        <Spacer />
                        <Box w={"78%"} >

                            <HStack>
                                <Text>Dresses :

                                </Text>
                                <Spacer />
                                <Select placeholder='Select option' w="200px" >
                                    <option value='asc'>Low-High</option>
                                    <option value='desc'>High-Low</option>
                                    <option value='option3'>A-Z</option>
                                </Select>

                                {/* <HStack>
                                    <Button disabled={page==1} onClick={() => setPage(page - 1)}>Prev</Button>
                                    <Text>{page} / {totalPages}</Text>
                                    <Button disabled={page==totalPages} onClick={() => setPage(page + 1)}>Next</Button>
                                </HStack> */}

                            </HStack>

                            <Box >
                         
                                
                            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                                                 
                            {products.map((ele, id) => {
                               
                                  return( 
                                     <CardProduct
                                    key={ele.id}
                                    {...ele}
                                    handleCart={()=>handleCart(id)}
                                    />
                                  )}
                                    )}
                                   
                            </Grid>
                                                       

                            </Box>

                        </Box>

                    </SimpleGrid>
                </Box>





            </Box>
        </Box>
    )
}

export default Dresses