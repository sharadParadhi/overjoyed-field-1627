import { Box, Button, HStack, Text, Input, Image } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box w="95%" m="auto">
      <Box mt="50px">
        <Text fontSize={"2xl"} fontWeight="bold">About Us</Text>
        <Text fontSize={"sm"}>
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dress shop to find styles and fits perfect for any occasion, from
          cocktail parties to weddings to casual daytime silhouettes. Browse
          party skirts, wide-leg pants and jeans, and blouses that will turn
          heads. Complete your look with uncommon accessories—think only-here
          slides and head-turning totes. Discover our expansive home
          collections, from furniture to curtains, decorative pillows to duvets,
          wall art to Moroccan-inspired rugs. Looking for a housewarming gift?
          Try a coffee table book, original glassware or a set of coasters. Read
          More
        </Text>
      </Box>
      <Box mt="50px">
        <HStack spacing={"50px"}>
          <Box>
            <Text fontSize={"2xl"} fontWeight="bold">Sign Up for Email</Text>
            <Text fontSize={"sm"}>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </Text>
          </Box>
          <HStack spacing={"20px"}>
            <Input placeholder="Enter Email" size="lg" w="350px" />
            <Button>Submit</Button>
          </HStack>
        </HStack>
        <Text fontSize={"sm"} mt="20px">
          By signing up, you will receive Anthropologie offers, promotions and
          other commercial messages. You are also agreeing to Anthropologie’s
          Privacy Policy. You may unsubscribe at any time.
        </Text>
      </Box>
      <HStack w="95%" m="auto" mt="70px" justifyContent={"space-around"} >
        <Box textAlign={"left"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Help</Text>
            <Text>Track Your Order</Text>
            <Text>Start A Return Or Exch ange (US)</Text>
            <Text>Returns & Exchanges</Text>
            <Text>Shipping</Text>
            <Text>Customer Service</Text>
            <Text>Current Promotions</Text>
            <Text>Product Recalls</Text>
        </Box>
        <Box textAlign={"left"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>About Us</Text>
            <Text>Our Story</Text>
            <Text>Events</Text>
            <Text>A Greater Good</Text>
            <Text>Diversity & Inclusion</Text>
            <Text>Stories</Text>
        </Box>
        <Box textAlign={"left"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Services</Text>
            <Text>AnthroPerks</Text>
            <Text>Gift Cards</Text>
            <Text>AnthroLiving Designer & Trade</Text>
            <Text>Program</Text>
            <Text>Furniture: Guides & Services</Text>
            <Text>Store Pickup & Collection Points</Text>
            <Text>Klarna</Text>
        </Box>
        <Box textAlign={"left"}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Connect</Text>
            <Text>Contact Us</Text>
            <Text>Stay Connected</Text>
            <Text>Careers</Text>
            <Text>Styling Services</Text>
            <Text>Request A Catalog</Text>
        </Box>
      </HStack>
      <Image src="https://images.ctfassets.net/5de70he6op10/2Lh06CXT4AzVnj4LxvGsQD/a424e10a3b8c9e2e270dc22505bfbfa6/022421_SiteFooter_SMS_SIgnUp.jpg"
      alt="imgfooter"
      mt="35px"
      />
      <HStack w="25%" m="auto" mt="40px" >
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu"  fontSize={"sm"}>US</Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu" fontSize={"sm"}>France</Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu" fontSize={"sm"}>Germany </Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu" fontSize={"sm"}>Italy</Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu" fontSize={"sm"}>Spain </Text>
        <Text _hover={{ textDecoration: "underline" }} cursor="context-menu" fontSize={"sm"}>UK </Text>
        
      </HStack>
    </Box>
  );
}

export default Footer;