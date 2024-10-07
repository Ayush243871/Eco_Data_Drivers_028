import { useContext, useEffect, useState } from "react";
import FoodContext from "../context/FoodContext";
import Spinner from "../shared/Spinner";
import AddFoodModal from "./AddFoodModal";
import Food from "./Food";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Text, Flex } from "@chakra-ui/react";
export default function FoodList({ food_data, mealItems, onAdd, onRemove }) {
  const { foods, isLoading, handleAddFoodItem, handleDeleteFoodItem } =
    useContext(FoodContext);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isLoading && (!foods || foods.length === 0)) {
    return (
      <p>
        <br /> No foods added yet.
      </p>
    );
  }

  return isLoading ? (
    <>
      <br />
      <Spinner />{" "}
    </>
  ) : (
    <>
      <br />
      <Box>
        <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          mb={4} // margin-bottom for spacing
        >
          Add Your Meals
        </Text>
        <Flex
          justify="center"
          align="center"
          // Light gray background
          p={4} // Padding for better spacing
          borderRadius="md" // Optional: rounded corners
        >
          <Text mx={2} bg="gray.100" px={2} py={2} borderRadius={3}>
            Breakfast
          </Text>
          <Text mx={2} bg="gray.100" px={6} py={2} borderRadius={3}>
            Lunch
          </Text>
          <Text mx={2} bg="gray.100" px={6} py={2} borderRadius={3}>
            Dinner
          </Text>
        </Flex>
      </Box>

      <br />
      <AnimatePresence>
        <div className="foodList">
          <div className="new-card">
            <AddFoodModal handleAddFoodItem={handleAddFoodItem} />
          </div>

          {!isLoading && foods.length > 0 ? (
            food_data.map((food, index) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                style={{ transform: `translateY(${scrollY * 0.05}px)` }} // Adjust based on scroll
              >
                <Food
                  food={food}
                  item={mealItems.find((x) => x.id === food.id)}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  handleDeleteFoodItem={handleDeleteFoodItem}
                />
              </motion.div>
            ))
          ) : (
            <p>
              <br /> No foods added yet
            </p>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}
