import { Box, ButtonGroup, Flex, Button, Stack,Image, Grid, HStack, Spacer, SimpleGrid,} from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Home() {
    console.log("home")
    return (
        <Box>
            {/* first button part */}
            <Box w={"100%"} bg={"blue.10"} mt={4} mb={4}>
                <Flex alignItems={"center"} justifyContent={"space-around"}>

                    <Button w={"20%"}><Link>Stoc-Trafic-top</Link></Button>
                    <Button w={"20%"}><Link>Decor-DEFINED</Link></Button>
                    <Button w={"20%"}><Link>THE FUNITURE EDIT</Link></Button>
                    <Button w={"20%"}><Link>CAN'T MISS JEANS</Link></Button>
                </Flex>

            </Box>

            {/*  images rows*/}
            <Box w={"80%"}  >
                <HStack>
                
                    <Box w={"70%"} borderInline={"1px black"} pos={"absolute"} left={10}>
                    <Link ><Image w={"90%"} h={500}src="https://images.urbndata.com/is/image/Anthropologie/4139952400010_000_b14?$an-category$&qlt=80&fit=constrain" alt="img"/></Link>
                    </Box>
                    <Spacer/>
                    <Box w={"30%"} >
                        
                    <Link><Image ml={6} w={"100%"} h={500} src="https://images.urbndata.com/is/image/Anthropologie/66436783_055_b14?$an-category$&qlt=80&fit=constrain" alt="img"/></Link>
                    </Box>
                    </HStack>
            </Box>

            <Box mt={7}>
            <SimpleGrid columns={[1, null, 4]} spacing='40px' >
  <Box  height='230px'>
    <Link><Image src="https://images.urbndata.com/is/image/Anthropologie/48097422_070_a10?$an-category$&qlt=80&fit=constrain" alt="img"/></Link>
  </Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/79513925_011_d12?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/49216096_072_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/80141500_901_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  
</SimpleGrid>
            </Box>



        


            <Box  mt={9}>
            <SimpleGrid columns={[1, null, 2]} spacing='40px' mt={"12px"}>
  
  <Box h={200} ><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/49216096_072_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  <Box h={200}><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/80141500_901_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  
</SimpleGrid>
            </Box>

            {/* slider image */}
            <Box></Box>

        </Box>

    )
}

export default Home

