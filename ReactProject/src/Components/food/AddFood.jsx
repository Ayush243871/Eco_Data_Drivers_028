import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Icon,
  useColorMode,
} from "@chakra-ui/react";

function AddFood({ handleAddFoodItem }) {
  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [protein, setProtein] = useState("");
  const [calories, setCalories] = useState("");
  const [sugar, setSugar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFoodItem(name, serving, protein, calories, sugar);
    setName("");
    setServing("");
    setProtein("");
    setCalories("");
    setSugar("");
  };

  // Color mode hook to toggle between light and dark themes
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "teal.50" : "teal.800";
  const borderColor = colorMode === "light" ? "teal.200" : "teal.600";

  return (
    <Box
      textAlign="center"
      p={5}
      bg={bgColor}
      borderWidth="1px"
      borderRadius="md"
      borderColor={borderColor}
      boxShadow="lg"
    >
      <Heading as="h3" size="lg" mb={4} color="teal.600">
        Add Food
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" align="center" mb={4}>
          <FormControl id="name" mb={2}>
            <FormLabel>New Food</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter food name"
              variant="filled"
            />
          </FormControl>
          <FormControl id="serving" mb={2}>
            <FormLabel>Serving Size (g)</FormLabel>
            <Input
              type="number"
              value={serving}
              onChange={(e) => setServing(e.target.value)}
              placeholder="Enter serving size"
              variant="filled"
            />
          </FormControl>
          <FormControl id="protein" mb={2}>
            <FormLabel>Protein (g)</FormLabel>
            <Input
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              placeholder="Enter protein amount"
              variant="filled"
            />
          </FormControl>
          <FormControl id="calories" mb={2}>
            <FormLabel>Calories</FormLabel>
            <Input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Enter calories"
              variant="filled"
            />
          </FormControl>
          <FormControl id="sugar" mb={4}>
            <FormLabel>Sugar (g)</FormLabel>
            <Input
              type="number"
              value={sugar}
              onChange={(e) => setSugar(e.target.value)}
              placeholder="Enter sugar amount"
              variant="filled"
            />
          </FormControl>
        </Flex>
        <Button
          type="submit"
          colorScheme="teal"
          leftIcon={<Icon as={FaPlus} />}
          variant="solid"
        >
          Add Meal
        </Button>
      </form>
    </Box>
  );
}

export default AddFood;
