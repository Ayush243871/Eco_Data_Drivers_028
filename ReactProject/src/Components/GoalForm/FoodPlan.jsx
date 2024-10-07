import React from 'react';
import { Box, Heading, Text, VStack, Image, SimpleGrid } from '@chakra-ui/react';

const FoodPlan = ({ goal }) => {
  const foodPlan = goal === 'gain'
    ? [
        { name: 'Nuts', img: 'https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnV0c3xlbnwwfHwwfHx8MA%3D%3D', nutrient: 'Protein', calories: 607, nutrientContent: '20g' },
        { name: 'Whole Grains', img: 'https://media.istockphoto.com/id/659524906/photo/composition-with-variety-of-vegetarian-food-ingredients.webp?a=1&b=1&s=612x612&w=0&k=20&c=bT75i83Q2lRhj299pTuZuU6odZHTpEB_FhEIOqXgBGU=', nutrient: 'Carbohydrates', calories: 346, nutrientContent: '73g' },
        { name: 'Dairy', img: 'https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.webp?a=1&b=1&s=612x612&w=0&k=20&c=M79U7Z-a-kjb_EkbmPsw8lqv16QwOL3T1uUJFj88qkQ=', nutrient: 'Calcium', calories: 150, nutrientContent: '300mg' },
        { name: 'Salmon', img: 'https://media.istockphoto.com/id/634575920/photo/raw-salmon-steak.webp?a=1&b=1&s=612x612&w=0&k=20&c=eWydDzIlywg8Apxzga_QrBbamP55zcTNWl0u43xaah0=', nutrient: 'Omega 3', calories: 206, nutrientContent: '2.2g' },
        { name: 'Avocado', img: 'https://media.istockphoto.com/id/544809990/photo/toast-with-avocado-and-cress.webp?a=1&b=1&s=612x612&w=0&k=20&c=oY_-eDhApInch4HeF_bfuHp6sfgQseBiK3UcDDDIZbE=', nutrient: 'Healthy Fats', calories: 240, nutrientContent: '15g' },
        { name: 'Chicken Breast', img: 'https://media.istockphoto.com/id/118369505/photo/chicken-breasts.webp?a=1&b=1&s=612x612&w=0&k=20&c=BP8F8XlcBprGM1DOZ-_QO18BUJjPRPGpGlCNr9DJhls=', nutrient: 'Protein', calories: 165, nutrientContent: '31g' },
        { name: 'Sweet Potatoes', img: 'https://media.istockphoto.com/id/183303498/photo/sweet-potato-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y1FUKBVM1eyYccUcqSV_Ilem9-ZDkvl6m60hg2hxziI=', nutrient: 'Carbohydrates', calories: 112, nutrientContent: '26g' }
      ]
    : [
        { name: 'Vegetables', img: 'https://media.istockphoto.com/id/1675960430/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=3g66RlUBdBMat3iBwLI3H_VqlosT3AkBBAX28QV8qgg=', nutrient: 'Fiber', calories: 50, nutrientContent: '4g' },
        { name: 'Lean Proteins', img: 'https://media.istockphoto.com/id/1296030180/photo/composition-with-high-protein-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=E6c89L5odhqbzpsbdA_XBPrxSdaju_rP9yKRMtePluY=', nutrient: 'Protein', calories: 165, nutrientContent: '31g' },
        { name: 'Fruits', img: 'https://media.istockphoto.com/id/1273378551/photo/set-of-summer-fruits-and-berries-in-wooden-serving.webp?a=1&b=1&s=612x612&w=0&k=20&c=C9lAve8FYNn3ZK86yG4mH6J3Wf-k1Y-55PtLLDNmVaQ=', nutrient: 'Vitamin C', calories: 80, nutrientContent: '70mg' },
        { name: 'Oatmeal', img: 'https://media.istockphoto.com/id/613121170/photo/hot-7-grain-breakfast-cereal-with-yogurt-and-fresh-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=sJ_1bIMQs9-hGiR0EzJ7huNQQ8KOd-A11xRUZg5hDvg=', nutrient: 'Magnesium', calories: 150, nutrientContent: '60mg' },
        { name: 'Egg Whites', img: 'https://media.istockphoto.com/id/955096190/photo/egg-white-boiled.webp?a=1&b=1&s=612x612&w=0&k=20&c=rcmqaEcKiPwZez9o_o6eGVLU0F0vctWT-q6grwBOekM=', nutrient: 'Protein', calories: 17, nutrientContent: '3.6g' },
        { name: 'Broccoli', img: 'https://media.istockphoto.com/id/172648548/photo/broccoli-raab.webp?a=1&b=1&s=612x612&w=0&k=20&c=e3cUoXTleENzp0_J-iWHVhmQaF-DqC9NPrKzwDQdeHQ=', nutrient: 'Vitamin K', calories: 55, nutrientContent: '92mcg' },
        { name: 'Lentils', img: 'https://media.istockphoto.com/id/646869862/photo/dry-beans-collection.webp?a=1&b=1&s=612x612&w=0&k=20&c=7bfy539NDuszhRtQFZ1ANlMr7-JPisbgTa0yT66MxHo=', nutrient: 'Iron', calories: 116, nutrientContent: '3.3mg' }
      ];

  return (
    <Box p={6} maxW="1300px" mx="auto" bg="white" borderRadius="lg" boxShadow="xl">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Food Plan ({goal === 'gain' ? 'Weight Gain' : 'Weight Loss'})
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {foodPlan.map((food, index) => (
          <Box key={index} bg="gray.100" borderRadius="md" p={4} boxShadow="lg" textAlign="center">
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {food.name}
            </Text>
            <Image src={food.img} alt={food.name} boxSize="50%" width="100%" objectFit="cover" mb={4} backgroundSize={"cover"}/>
            <Text fontSize="md" color="gray.700">
              Nutrient: {food.nutrient} ({food.nutrientContent})
            </Text>
            <Text fontSize="md" color="gray.700">
              Calories: {food.calories} kcal
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FoodPlan;
