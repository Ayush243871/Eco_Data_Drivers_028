import { useState, useEffect } from "react";
import { Box, Button, Input, Text, Flex, Image } from "@chakra-ui/react";
import { FaAppleAlt, FaBreadSlice, FaCarrot, FaFire, FaLeaf } from 'react-icons/fa';

export default function FetchFoodApi() {
  const API_KEY = "XlbmfvBoP5wat3i76hIV0RZzstoaPCp9M52WGasf";
  const [typedFood, setTypedFood] = useState("");
  const [fetchedFood, setFetchedFood] = useState([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (typedFood.trim() === "") return; // Prevent fetching on empty input
      fetchData();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [typedFood]);

  const fetchData = () => {
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${typedFood}&pageSize=6`
    )
      .then((response) => {
        if (!response.ok) throw new Error("Did not receive expected food data");
        return response.json();
      })
      .then((data) => {
        const foodItems = data.foods.map((item) => ({
          ...item,
          imageUrl: item.foodNutrients.find(nutrient => nutrient.name === "Food Photo")?.value || null,
        }));
        setFetchedFood(foodItems);
        setFetchError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setFetchError(err.message);
      });
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Search for Specific Food Nutrients</Text>
      <Flex mb={4} align="center">
        <Input
          placeholder="Type food to load..."
          value={typedFood}
          onChange={(event) => setTypedFood(event.target.value)}
          mr={2}
        />
        <Button onClick={fetchData} colorScheme="teal">Fetch Food</Button>
      </Flex>

      {fetchError && <Text color="red.500">{`Error: ${fetchError}`}</Text>}

      {fetchedFood.length > 0 && (
        <Flex wrap="wrap" gap={4} mt={5}>
          {fetchedFood.map((result) => (
            <Box 
              key={result.fdcId}
              borderWidth="1px" 
              borderRadius="md" 
              boxShadow="md" 
              p={4} 
              bg="white" 
              minWidth="250px"
              flex="1 1 calc(33% - 16px)" 
              transition="all 0.2s"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
            >
              <Text fontWeight="bold" fontSize="lg" color="teal.600">{result.description}</Text>
              <Text mt={2}>Size: <b>{result.packageWeight}g</b></Text>

              <Flex direction="column" align="center" mt={4}>
                <Image 
                  src={result.imageUrl || "https://i.pinimg.com/236x/bd/6c/4e/bd6c4eebf377461d53144ad967695f1a.jpg"} 
                  alt={result.description}
                  boxSize={{ base: "150px", md: "200px" }} 
                  objectFit="cover"
                  borderRadius="md"
                  mb={4}
                />
                
                <Flex justify="space-between" align="center" mt={2} flexWrap="wrap" w="full">
                  <Text fontSize={{ base: "sm", md: "md" }} color="green.500">
                    <FaAppleAlt style={{ marginRight: '5px' }} /> Protein: {result.foodNutrients[0]?.value}g
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="orange.500">
                    <FaBreadSlice style={{ marginRight: '5px' }} /> Carbs: {result.foodNutrients[2]?.value}g
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="yellow.600">
                    <FaCarrot style={{ marginRight: '5px' }} /> Sugars: {result.foodNutrients[4]?.value}g
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="red.500">
                    <FaFire style={{ marginRight: '5px' }} /> Calories: {result.foodNutrients[3]?.value} kcal
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} color="teal.600">
                    <FaLeaf style={{ marginRight: '5px' }} /> Fiber: {result.foodNutrients[1]?.value}g
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
}
