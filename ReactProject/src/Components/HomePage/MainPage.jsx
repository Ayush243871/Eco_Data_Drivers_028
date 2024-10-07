import { Outlet, Link } from "react-router-dom";
import { Heading, Button, Box, Text, VStack, Grid, HStack, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import './MainPage.css'; // Custom styles
import Footer from "../Footer/footer";

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const featureBoxes = document.querySelectorAll('.feature-box');
      featureBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < window.innerHeight - 100) {
          box.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Personalized Health Feedback",
      image: "https://media.istockphoto.com/id/1259984250/photo/calories-counting-diet-food-control-and-weight-loss-concept-calorie-counter-application-on.jpg?s=612x612&w=0&k=20&c=j7fE9RwdkjWNQWDG9Y_yNAz_rLkDbvrz0Pmn5yp1mww=",
      content: [
        "Get insights on your health based on BMI.",
        "Personalized nutrition plans.",
        "Fitness goals tailored for you.",
        "Instant feedback on health metrics.",
        "Recommendations to improve wellness."
      ],
      details: "Personalized feedback provides users with tailored insights based on their individual health data and goals. It helps users understand their progress and encourages them to stay committed to their fitness journey.",
      link: "/Main/HealthForm",
      buttonLabel: "Get Personalized Feedback"
    },
    {
      title: "Set Your Goals",
      image: "https://media.istockphoto.com/id/528072248/photo/bmi-body-mass-index-written-on-a-notepad-sheet.jpg?s=1024x1024&w=is&k=20&c=fx8k4f48ZmF-xF97cMx4YaS8HA2Ea6OWhyI3PqiN2g8=",
      content: [
        "Customized calorie intake goals.",
        "Track your fitness journey.",
        "Weekly and monthly progress tracking."
      ],
      details: "The primary purpose of this application is to provide users with a personalized nutrition plan that aids in achieving their fitness and health goals, whether it's weight loss, muscle gain, or maintenance.",
      link: "/Main/GoalForm",
      buttonLabel: "Set Your Goals"
    },
    {
      title: "Meal Tracking & Nutrition",
      image: "https://img.freepik.com/free-photo/healthy-diet-male-hands-holding-smartphone-keeping-track-calories-his-food-with-fitness-app_662251-2229.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid",
      content: [
        "Track daily calories effortlessly.",
        "Search for food nutrition easily.",
        "Personalized food recommendations."
      ],
      details: "The Meal Tracker is an innovative tool designed to help you take control of your nutrition and achieve your health goals.",
      link: "/Main/MealWrapper",
      buttonLabel: "Track Your Meals"
    },
    {
      title: "Wellness Tips",
      image: "https://media.istockphoto.com/id/1208604845/vector/healthy-lifestyle-and-self-care-concept.jpg?s=612x612&w=0&k=20&c=4RXl4xGUFpQWHf_LVBRngZRsikqw8BOc51poaItPxMU=",
      content: [
        "Daily tips for a healthier lifestyle.",
        "Mental and physical wellness advice."
      ],
      details: "The Meal Tracker not only helps you monitor your food intake but also educates you about the nutritional value of the foods you consume.",
      link: "/Main/Wellness",
      buttonLabel: "Explore Wellness Tips"
    },
  ];

  return (
    <>
    <Box className="main-container" as="section" p={4}>
      <Heading as="h1" size="lg" color="blue.500" textAlign="center" mb={6}>
        Get Started With Swasth!
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
        {features.map((feature, index) => (
          <Box
            key={index}
            className="feature-box animate"
            p={8}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }} // Hover animation effect
          >
            <Image
              src={feature.image}
              alt={feature.title}
              boxSize={{ base: "100%", md: "400px" }}
              objectFit="cover"
              borderRadius="lg"
              mb={4}
            />
            <VStack align="start">
              <Heading size="md" color="blue.600">{feature.title}</Heading>
              <VStack align="start" mt={2}>
                {feature.content.map((text, idx) => (
                  <Text key={idx}>{text}</Text>
                ))}
              </VStack>
              <Text mt={2}>{feature.details}</Text>
              <Button mt={4} colorScheme="blue">
                <Link to={feature.link}>{feature.buttonLabel}</Link>
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>

      <div className="content">
        <Outlet />
      </div>
    </Box>
    <Footer/>
    </>
  );
};

export default Main;
