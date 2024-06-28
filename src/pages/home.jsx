import { Box, ButtonGroup, Flex, Button, Stack,Image, Grid, HStack, Spacer, SimpleGrid,} from "@chakra-ui/react"
import { Link } from "react-router-dom"



const images = [
    {
      src: "https://via.placeholder.com/150x150",
      alt: "Placeholder image 1"
    },
    {
      src: "https://via.placeholder.com/150x150",
      alt: "Placeholder image 2"
    },
    {
      src: "https://via.placeholder.com/150x150",
      alt: "Placeholder image 3"
    },
    {
        src: "https://via.placeholder.com/150x150",
        alt: "Placeholder image 3"
      },
      {
        src: "https://via.placeholder.com/150x150",
        alt: "Placeholder image 3"
      },
      {
        src: "https://via.placeholder.com/150x150",
        alt: "Placeholder image 3"
      },
      {
        src: "https://via.placeholder.com/150x150",
        alt: "Placeholder image 3"
      },
      {
        src: "https://via.placeholder.com/150x150",
        alt: "Placeholder image 3"
      },
  ];

function Home() {
    console.log("home")
    return (
        <Box >
          <Box color="gray.100" w={"100%"}/>
            <Box w={"90%"} m={"auto"} >

            <Box w={"100%"} bg={"blue.10"} mt={10} padding={3}>
                <Flex alignItems={"center"} justifyContent={"space-around"}>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}>
                      <Link to="/clothing">Stoc-Trafic-top</Link>
                    </Button>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}><Link to="/clothing">Stoc-Trafic-top</Link></Button>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}><Link to="/clothing">Stoc-Trafic-top</Link></Button>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}><Link  to="/clothing">Decor-DEFINED</Link></Button>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}><Link  to="/clothing">THE FUNITURE EDIT</Link></Button>
                    <Button w={"13%"} padding={8} bg="orange.50" border={"1px solid gray"}><Link  to="/clothing">CAN'T MISS JEANS</Link></Button>
                </Flex>
            </Box>

            {/*  images rows*/}
            <Box w={"100%"}  mt={10}  >
                <SimpleGrid display={"flex"} gap={"20px"} >
                    <Box w={"60%"} border={"1px solid black"}>
                    <Link to="/clothing"><Image w={"100%"} h={500}src="https://images.urbndata.com/is/image/Anthropologie/4123650590242_042_b?$an-category$&qlt=80&fit=constrain" alt="img"/></Link>
                   
                    </Box>
                    <Spacer/>
                    
                   <Box w={"38%"} >
                   <Link to="/clothing"><Image  w={"100%"} h={500} src="https://images.ctfassets.net/5de70he6op10/2HZb3EhLXHnarUOCAJk7aT/32788f943319118f9b7becb6e42d5a41/484733507-032723_hpg_m1-video_ss_1.gif?w=1125&q=80&fm=webp" alt="img"/></Link>
                    
                   </Box>
                        
                  
                  
                    </SimpleGrid>
            </Box>

            <Box mt={7}>
            <SimpleGrid columns={[1, null, 4]} spacing='40px' >
  <Box >
    <Link><Image src="https://images.urbndata.com/is/image/Anthropologie/48097422_070_a10?$an-category$&qlt=80&fit=constrain" alt="img"/></Link>
  </Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/79513925_011_d12?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/49216096_072_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  <Box  height='230px'><Link><Image src="https://images.urbndata.com/is/image/Anthropologie/80141500_901_a?$an-category$&qlt=80&fit=constrain" alt="img"/></Link></Box>
  
</SimpleGrid>
            </Box>



        
            <Box w={"100%"}  mt={5} >
                <SimpleGrid display={"flex"} gap={"20px"}>
                
                    <Box w={"60%"} >
                    <Link ><Image w={"100%"} h={500}src="https://images.ctfassets.net/5de70he6op10/3XMu2ZqDW5nhJZXNNruw0h/12dc4c0fcfe14b725150d3f35c34f1cb/ALiving_HPG_LS_01_A_1.jpg?w=1302&q=80&fm=jpg&fl=progressive" alt="img"/></Link>
                   
                    </Box>
                    <Spacer/>
                    
                   <Box w={"35%"} >
                   <Link><Image  w={"100%"} h={500} src="https://images.ctfassets.net/5de70he6op10/4s2tUEDFXeSFY6RJfCfyVT/cf9dcbbdce78c361170d712868075de4/483496406-customerfaves_ss_1.jpg?w=1125&q=80&fm=jpg&fl=progressive" alt="img"/></Link>
                    
                   </Box>
                        
                  
                  
                    </SimpleGrid>
            </Box>



            <Box w={"100%"}  mt={5} >
                <SimpleGrid display={"flex"} gap={"20px"}>
                
                    <Box w={"50%"} >
                    <Link ><Image w={"100%"} h={500}src="https://images.ctfassets.net/5de70he6op10/3EGhqaesJomguYQJj82T3Y/0af651da742d9adbb13c8892a8aaba91/Shop_Bridal_Shower_Gifts.jpg?w=630&q=80&fm=jpg&fl=progressive" alt="img"/></Link>
                   
                    </Box>
                    <Spacer/>
                    
                   <Box w={"50%"} border={"1px solid black"}>
                   <Link><Image  w={"100%"} h={500} src="https://images.ctfassets.net/5de70he6op10/6tYNYrPtuSGAPCQaW6FooC/4967a0dacc64ba811cea76ef7e5894e8/482574888-shop-personalized-monogram-gifts.jpg?w=630&q=80&fm=jpg&fl=progressive" alt="img"/></Link>
                    
                   </Box>
                        
                  
                  
                    </SimpleGrid>
            </Box>

            </Box>

            {/* first button part */}
           

           

            

        </Box>

    )
}

export default Home

