import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text, VStack, Image, SimpleGrid } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Meals = () => {
  const location = useLocation();
  const { goal } = location.state || { goal: 'loss' };
  
  // Meal details with images and descriptions
  const mealPlan = goal === "gain"
    ? [
        { name: 'Breakfast', time: '8:00 AM', description: 'Oats with fruits and nuts', img: 'https://media.istockphoto.com/id/1070399996/photo/healthy-vegan-green-smoothie-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=XeDsKB07Gh3Ga45dWW17OqQ6ihAq_PxRGNerA-YvmkI=' },
        { name: 'Morning Snack', time: '10:30 AM', description: 'Greek yogurt with honey', img: 'https://media.istockphoto.com/id/1456226371/photo/greek-yogurt-with-honey-syrup-and-nuts.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uh-01tSHll_eV71gez_wvJgL6DskzVzuenSYxESNsIw=' },
        { name: 'Lunch', time: '1:00 PM', description: 'Grilled chicken with vegetables', img: 'https://media.istockphoto.com/id/1129903432/photo/basil-nuts-pesto-quinoa-with-walnuts-parsley-and-poached-egg.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mwnj9c-p11Kr86UPVfQXt5i54oUAOtUoO33V6Z6m8ys=' },
        { name: 'Afternoon Snack', time: '4:00 PM', description: 'Mixed nuts and an apple', img: 'https://media.istockphoto.com/id/1279763992/photo/healthy-food-for-lower-cholesterol-and-heart-care-shot-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=ujC9Sg4-ck6wYZZH_WJ3a7pGFy-IJR5IWLe_FhsGXeU=' },
        { name: 'Dinner', time: '7:00 PM', description: 'Salmon with quinoa and veggies', img: 'https://media.istockphoto.com/id/1409941378/photo/lobster-thermidor-with-rice-served-in-a-dish-isolated-on-dark-background-side-view-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=N7-NkNlPifpZlhhix6A1tANerGdanvrcUpuRjj9ovIQ=' }
      ]
    : [
        { name: 'Breakfast', time: '9:00 AM', description: 'Smoothie bowl with granola', img: 'https://media.istockphoto.com/id/1070399996/photo/healthy-vegan-green-smoothie-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=XeDsKB07Gh3Ga45dWW17OqQ6ihAq_PxRGNerA-YvmkI=' },
        { name: 'Lunch', time: '1:00 PM', description: 'Quinoa salad with lean proteins', img: 'https://media.istockphoto.com/id/1129903432/photo/basil-nuts-pesto-quinoa-with-walnuts-parsley-and-poached-egg.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mwnj9c-p11Kr86UPVfQXt5i54oUAOtUoO33V6Z6m8ys=' },
        { name: 'Dinner', time: '7:00 PM', description: 'Grilled fish with steamed veggies', img: 'https://media.istockphoto.com/id/1409941378/photo/lobster-thermidor-with-rice-served-in-a-dish-isolated-on-dark-background-side-view-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=N7-NkNlPifpZlhhix6A1tANerGdanvrcUpuRjj9ovIQ=' }
      ];

  // Scroll-based animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.7,  // Start animation when 70% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 1, y: 50 });
    }
  }, [controls, inView]);

  return (
    <Box 
      p={6} 
      maxW="100vw" 
      mx="auto" 
      bg="white" 
      borderRadius="l" 
      boxShadow="xl"
      backgroundSize="cover" 
      backgroundImage="https://images.unsplash.com/photo-1504643039591-5296f80b7963?w=1000&q=80"
      backgroundAttachment="fixed"
      backgroundPosition="center"
    >
      <Heading as="h2" size="xl" mb={4} textAlign="center" color="white" textShadow="2px 2px 6px rgba(0, 0, 0, 0.8)">
        Meal Plan ({goal === 'gain' ? 'Weight Gain' : 'Weight Loss'})
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {mealPlan.map((meal, index) => (
          <motion.div 
            ref={ref}
            initial={{ opacity: 1, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
          >
            <Box 
              p={4} 
              bg="gray.50" 
              borderRadius="md" 
              boxShadow="md" 
              textAlign="center" 
              height="100%"
            >
              <Heading as="h3" size="lg" mb={2}>
                {meal.name} - {meal.time}
              </Heading>
              <Image 
                src={meal.img} 
                alt={meal.name} 
                boxSize="200px" 
                width="100%" 
                objectFit="cover" 
                mb={2} 
                backgroundSize="cover"
              />
              <Text fontSize="md">{meal.description}</Text>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Meals;
