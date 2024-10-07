import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  VStack,
  HStack,
  Badge,
  Progress,
  Icon,

} from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { FaAppleAlt } from "react-icons/fa";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import {
  selectTargetCalories,
  selectTotalCalories,
} from "../../store/nutritionSlice";

// Define colors for the pie chart
const COLORS = ["#0088FE", "#00C49F"];

export default function SavedMealItem({ countMealItems, mealItems }) {
  const [day, setDay] = useState("");
  const currentCalories = useSelector(selectTotalCalories);
  const calorieGoal = useSelector(selectTargetCalories);
console.log(currentCalories , calorieGoal)
  useEffect(() => {
    const updateDay = () => {
      const currentDay = new Date()
        .toString()
        .split(" ")
        .splice(1, 3)
        .join(" ");
      setDay(currentDay);
    };

    updateDay();
    const intervalId = setInterval(updateDay, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Calculate remaining calories to goal
  const remainingCalories = calorieGoal - currentCalories;
  const progressPercentage = Math.min(
    (currentCalories / calorieGoal) * 100,
    100
  );

  // Data for the pie chart (only total and remaining calories)
  const data = [
    { name: "Total Calories", value: currentCalories },
    { name: "Remaining Calories", value: Math.max(remainingCalories, 0) },
  ];

  return (
    <Box
      p={5}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      maxW="full"
      mx="auto"
      mb={4}
      border="1px"
      borderColor="teal.200"
    >
      <Flex direction="column" mb={4}>
        <Flex alignItems="center" justifyContent="center" mb={3}>
          <Icon as={FaAppleAlt} boxSize={6} color="teal.400" />
          <Heading as="h2" size="lg" textAlign="center" color="teal.500" ml={2}>
            Meal Tracker - {day}
          </Heading>
        </Flex>
        <Text
          fontSize="2xl"
          textAlign="center"
          mt={2}
          fontWeight="bold"
          color="teal.600"
        >
          Total Foods Eaten:{" "}
          <Badge colorScheme="teal" fontSize="lg" variant="solid">
            {countMealItems}
          </Badge>
        </Text>

        <VStack spacing={4} align="stretch" mt={4}>
          <Flex justify="space-between" fontWeight="bold" color="teal.600">
            <Text>Food Item</Text>
            <Text>Quantity</Text>
          </Flex>
          <Divider />
          {mealItems.length > 0 ? (
            mealItems.map((item) => (
              <HStack
                key={item.id}
                justify="space-between"
                py={2}
                borderBottom="1px"
                borderColor="gray.200"
                _hover={{ bg: "teal.50" }}
              >
                <Text>
                  <small>x{item.qty}</small> {item.name}
                </Text>
                <Text fontWeight="bold" color="teal.500">
                  {item.qty}
                </Text>
              </HStack>
            ))
          ) : (
            <Text textAlign="center" color="gray.500" py={4}>
              No food items recorded.
            </Text>
          )}
        </VStack>

        <Box mt={4}>
          <Text fontWeight="bold" color="teal.600">
            Calorie Progress
          </Text>
          <Progress value={progressPercentage} colorScheme="teal" size="lg" />
          <Text textAlign="center" mt={2}>
            {remainingCalories > 0
              ? `You need ${remainingCalories} more calories to reach your goal!`
              : `You've reached your calorie goal!`}
          </Text>
        </Box>
      </Flex>

      {/* Pie Chart Section */}
      <Box
        p={4}
        borderRadius="md"
        border="1px"
        borderColor="teal.200"
        bg="teal.50"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontWeight="bold" color="teal.600" textAlign="center">
          Calorie Breakdown
        </Text>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <Text textAlign="center" color="teal.600" fontWeight="bold">
          {currentCalories} / {calorieGoal} Calories
        </Text>
      </Box>
    </Box>
  );
}
