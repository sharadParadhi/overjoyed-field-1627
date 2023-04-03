import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button} from '@chakra-ui/react'
import { useContext } from 'react'
import {Authcontext} from "../Context/AuthContext"


function CardProduct({id,image,title,price,handleCart}){
    const {cartData,setCartData}=useContext(Authcontext)

//    const handleCart=(id,image,title,price)=>{
    
//     let obj={
//         id:id,
//         image:image,
//         title:title,
//         price:price
//     }
//     setCartData([...cartData,obj])

//    }
  
   
    return (
        
<>

 <Card >
  <CardBody>
   <Stack>
    <Image src={image} alt="img"/>
    <Text>{title}</Text>
    <Text>${price}</Text>
   </Stack>
   
  </CardBody>
  
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' 
      onClick={()=>handleCart(id)}
      >
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</> 
    )

}


export default CardProduct