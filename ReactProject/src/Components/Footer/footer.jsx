import { Box, Flex, Image, Text, Stack, Link, Grid, GridItem } from "@chakra-ui/react";
import logo from "../../assets/SwasthLogo.jpg";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="teal.500" color="white" margin={"auto"}>
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="flex-start" 
        justify="space-between" 
        maxW="1200px" 
        mx="auto" 
        px={4}
        wrap="wrap"
      >
        {/* Logo Section */}
        <Box mb={{ base: 4, md: 0 }} textAlign={{ base: "center", md: "left" }} flex="1">
          <Link href="#home">
            <Image 
              src={logo} 
              alt="Logo" 
              width={{ base: "60%", md: "75px" }} 
              margin={"auto"} 
              display={"block"}
              objectFit="contain"  // Ensures logo fits well
            />
          </Link>
        </Box>

        {/* Links Section */}
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
          gap={6} 
          mb={{ base: 4, md: 0 }} 
          flex="2"
          textAlign={{ base: "center", md: "left" }}  // Centering text for smaller screens
        >
          <GridItem>
            <Text fontWeight="bold" color={"navy"}>Key Features</Text>
            <Stack spacing={2} mt={2}>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.300' }}>Personalized Workouts</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.300' }}>Nutrition Guidance</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.300' }}>Progress Tracking</Link>
              <Link href="#" _hover={{ textDecoration: 'underline', color: 'gray.300' }}>Health Insights</Link>
            </Stack>
          </GridItem>

          <GridItem>
            <Text fontWeight="bold" color={"navy"}>Contact Us</Text>
            <Stack spacing={2} mt={2}>
              <Text>Email: support@swasth.com</Text>
              <Text>Phone: +1 234 567 890</Text>
              <Text>Address: 123 Health St, Wellness City, CA 12345</Text>
            </Stack>
          </GridItem>
        </Grid>

        {/* Social Media Section */}
        <Box flex="1" margin={"auto"}>
          <Text fontWeight="bold" textAlign={{ base: "center", md: "center" }} color={"navy"}>Follow Us</Text>
          <Flex 
            justify={{ base: "center", md: "flex-end" }} 
            mt={2} 
            gap={3} 
            wrap="wrap"
            justifyContent={"center"}
          >
          <Link href="https://www.facebook.com/">
  <Image 
    src="https://www.fittr.com/assets/icons/footer/ic_facebook.svg" 
    alt="Facebook" 
    width={{ base: "25px", md: "30px" }}  
    _hover={{ 
      transform: 'scale(1.05)', 
      transition: '0.3s ease', 
      filter: 'invert(36%) sepia(100%) saturate(0%) hue-rotate(190deg) brightness(106%) contrast(104%)' 
    }} 
  />
</Link>
<Link href="https://www.instagram.com/">
  <Image 
    src="https://www.fittr.com/assets/icons/footer/ic_instagram.svg" 
    alt="Instagram" 
    width={{ base: "25px", md: "28px" }}  
    _hover={{ 
      transform: 'scale(1.05)', 
      transition: '0.3s ease', 
      filter: 'invert(25%) sepia(70%) saturate(6500%) hue-rotate(340deg) brightness(90%) contrast(101%)' 
    }} 
  />
</Link>
<Link href="https://www.linkedin.com/feed/">
  <Image 
    src="https://www.fittr.com/assets/icons/footer/ic_linkedin.svg" 
    alt="LinkedIn" 
    width={{ base: "25px", md: "30px" }}  
    _hover={{ 
      transform: 'scale(1.05)', 
      transition: '0.3s ease', 
      filter: 'invert(23%) sepia(100%) saturate(0%) hue-rotate(190deg) brightness(107%) contrast(104%)' 
    }} 
  />
</Link>
<Link href="https://x.com/tweeter">
  <Image 
    src="https://www.fittr.com/assets/icons/footer/ic_twitter.svg" 
    alt="Twitter" 
    width={{ base: "25px", md: "30px" }}  
    _hover={{ 
      transform: 'scale(1.05)', 
      transition: '0.3s ease', 
      filter: 'invert(31%) sepia(80%) saturate(108%) hue-rotate(180deg) brightness(90%) contrast(99%)' 
    }} 
  />
</Link>

          </Flex>
        </Box>
      </Flex>

      <Flex justifyContent={"center"} mt={4} gap={5} alignItems={"center"}>
        <Link href="https://play.google.com/store/games?hl=en-IN">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/googleplay.svg"
            alt="Google Play"
            width={{ base: "70px", md: "100px" }}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}  // Hover effect
          />
        </Link>
        <Link href="https://www.apple.com/in/">
          <Image
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/icons/cult/appstore.svg"
            alt="App Store"
            width={{ base: "70px", md: "100px" }}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}  // Hover effect
          />
        </Link>
      </Flex>

      <Box textAlign="center" mt={4}>
        <Text fontSize="sm">Copyright © {new Date().getFullYear()} Swasth. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
