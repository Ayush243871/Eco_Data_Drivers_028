import React, { useState, useEffect } from 'react';
import {
  Box, Button, Input, FormControl, Select, FormLabel, VStack, Text, useToast,
  Heading, Flex, Stack
} from '@chakra-ui/react';

import { useColorModeValue } from "@chakra-ui/react";
import { FaUtensils, FaDumbbell, FaHeartbeat, FaCarrot, FaAppleAlt, FaRunning } from "react-icons/fa"; // Icons

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './GoalForm.css';
import Footer from '../Footer/footer';

const GoalForm = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const boxShadowColor = useColorModeValue("0px 4px 6px rgba(0, 0, 0, 0.1)", "0px 4px 6px rgba(255, 255, 255, 0.1)");
  const [goal, setGoal] = useState('');
  const [weightss, setWeight] = useState('');
  const [months, setMonths] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bodyFat, setBodyFat] = useState(''); // New input for body fat percentage
  const [activityLevel, setActivityLevel] = useState(''); // New input for activity level
  const [weeklyTargetChange, setWeeklyTargetChange] = useState(''); // Weight change per week
  const [plan, setPlan] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const savedGoal = localStorage.getItem('goal');
    const savedWeight = localStorage.getItem('weightss');
    const savedMonths = localStorage.getItem('months');
    const savedAge = localStorage.getItem('age');
    const savedHeight = localStorage.getItem('height');
    const savedGender = localStorage.getItem('gender');
    const savedBodyFat = localStorage.getItem('bodyFat');
    const savedActivityLevel = localStorage.getItem('activityLevel');
    const savedWeeklyTargetChange = localStorage.getItem('weeklyTargetChange');

    if (savedGoal) setGoal(savedGoal);
    if (savedWeight) setWeight(savedWeight);
    if (savedMonths) setMonths(savedMonths);
    if (savedAge) setAge(savedAge);
    if (savedHeight) setHeight(savedHeight);
    if (savedGender) setGender(savedGender);
    if (savedBodyFat) setBodyFat(savedBodyFat);
    if (savedActivityLevel) setActivityLevel(savedActivityLevel);
    if (savedWeeklyTargetChange) setWeeklyTargetChange(savedWeeklyTargetChange);

    const handleBeforeUnload = () => {
      localStorage.removeItem('goal');
      localStorage.removeItem('weightss');
      localStorage.removeItem('months');
      localStorage.removeItem('age');
      localStorage.removeItem('height');
      localStorage.removeItem('gender');
      localStorage.removeItem('bodyFat');
      localStorage.removeItem('activityLevel');
      localStorage.removeItem('weeklyTargetChange');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (goal) localStorage.setItem('goal', goal);
    if (weightss) localStorage.setItem('weightss', weightss);
    if (months) localStorage.setItem('months', months);
    if (age) localStorage.setItem('age', age);
    if (height) localStorage.setItem('height', height);
    if (gender) localStorage.setItem('gender', gender);
    if (bodyFat) localStorage.setItem('bodyFat', bodyFat);
    if (activityLevel) localStorage.setItem('activityLevel', activityLevel);
    if (weeklyTargetChange) localStorage.setItem('weeklyTargetChange', weeklyTargetChange);
  }, [goal, weightss, months, age, height, gender, bodyFat, activityLevel, weeklyTargetChange]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goal || !months || !age || !height || !gender || !weeklyTargetChange || !bodyFat || !activityLevel) {
      toast({
        title: 'Please fill all fields.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const baseGainCalories = 2500;
    const baseLoseCalories = 1800;

    let dailyCalorieIntake = 0;
    if (goal === 'gain') {
      dailyCalorieIntake = baseGainCalories - (months * 100);
    } else if (goal === 'lose') {
      dailyCalorieIntake = baseLoseCalories + (months * 50);
    }

    // Weekly weight change
    const caloriesPerKg = 7700;
    const weeklyCalorieChange = weeklyTargetChange * caloriesPerKg;
    if (goal === 'gain') {
      dailyCalorieIntake += weeklyCalorieChange / 7;
    } else if (goal === 'lose') {
      dailyCalorieIntake -= weeklyCalorieChange / 7;
    }

    dailyCalorieIntake = Math.max(1200, Math.min(3500, dailyCalorieIntake));

    // Macronutrients calculations based on user inputs
    const proteinPerKg = activityLevel === 'sedentary' ? 1.2 : activityLevel === 'moderate' ? 1.5 : 1.8;
    const proteinIntake = weightss * proteinPerKg; // Protein in grams based on weight and activity level

    const fiberIntake = gender === 'male' ? 38 : 25; // Recommended fiber intake based on gender

    const daysPerMonth = 30;
    const totalDays = months * daysPerMonth;
    const monthlyCalorieIntake = dailyCalorieIntake * daysPerMonth;

    let mealsPerDay = 0;
    if (goal === 'gain') {
      mealsPerDay = 4 + Math.floor(months / 2);
    } else if (goal === 'lose') {
      mealsPerDay = 3 - Math.floor(months / 3);
    }
    mealsPerDay = Math.max(2, Math.min(6, mealsPerDay));

    const foodPlan = goal === 'gain'
      ? 'Eat calorie-dense foods like nuts, seeds, whole grains, and dairy.'
      : 'Focus on high-fiber foods like vegetables, lean proteins, and fruits.';
    const exercisePlan = goal === 'gain'
      ? 'Strength training 4-5 times a week, focus on compound movements.'
      : 'Cardio 3-4 times a week, strength training 2-3 times a week.';

    setPlan({
      dailyCalorieIntake,
      monthlyCalorieIntake,
      totalDays,
      mealsPerDay,
      proteinIntake,
      fiberIntake,
      foodPlan,
      exercisePlan,
      months,
      weeklyTargetChange,
    });
  };

 // Navigate to different pages based on user selection
 const navigateToPage = (page) => {
  const state = { goal, weightss, months, age, height, gender, weeklyTargetChange, bodyFat, activityLevel };
  if (page === "Meals") {
    navigate("/Main/GoalForm/Meals", { state });
  } else if (page === "FoodPlan") {
    navigate("/Main/GoalForm/FoodPlan", { state });
  } else if (page === "Exercise") {
    navigate("/Main/GoalForm/Exercise", { state });
  }
};
  return (
    <>
    <Box className="goal-form-container" minH="100vh" display="flex" flexDirection="column" justifyContent="center" p={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px', margin: '0 auto', }}>
          <Stack spacing={6}>
            <FormControl >
              <FormLabel>Goal</FormLabel>
              <Select
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                isRequired
              >
                <option value="">Select Goal</option>
                <option value="gain">Gain Weight</option>
                <option value="lose">Lose Weight</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Timeline (in months)</FormLabel>
              <Input
                type="number"
                name="months"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                isRequired
                min="1"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Current Weight (in kgs)</FormLabel>
              <Input
                type="number"
                name="weightss"
                value={weightss}
                onChange={(e) => setWeight(e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl>
              <FormLabel>Weekly Target Change (kg)</FormLabel>
              <Input
                type="number"
                name="weeklyTargetChange"
                value={weeklyTargetChange}
                onChange={(e) => setWeeklyTargetChange(e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl>
              <FormLabel>Height (in cm)</FormLabel>
              <Input
                type="number"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                isRequired
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Body Fat Percentage</FormLabel>
              <Input
                type="number"
                name="bodyFat"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                isRequired
              />
            </FormControl>

            <FormControl>
              <FormLabel>Activity Level</FormLabel>
              <Select
                name="activityLevel"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                isRequired
              >
                <option value="">Select Activity Level</option>
                <option value="sedentary">Sedentary</option>
                <option value="moderate">Moderate</option>
                <option value="active">Active</option>
              </Select>
            </FormControl>

            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Calculate
            </Button>
          </Stack>
        </form>
      </motion.div>


      {plan && (  // Correctly using braces to conditionally render the plan
        <Box
          mt={8}
          p={8}
          borderRadius="md"
          boxShadow={boxShadowColor}
          bg={bgColor}
          maxW={{ base: "100%", md: "800px" }} // Proper width for desktop
          mx="auto" // Center the Goal Plan on desktop
          textAlign={{ base: "left", md: "center" }} // Left align for mobile, center for desktop
          color={textColor}
        >
          <Heading size="md" mb={6}>Your Goal Plan</Heading>

          <Flex direction="column" align={{ base: "start", md: "center" }}>
            <Flex align="center" mb={3}>
              <FaAppleAlt color="teal" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Daily Calorie Intake:</strong> {Math.round(plan.dailyCalorieIntake)} kcal</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaDumbbell color="purple" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Protein Intake:</strong> {Math.round(plan.proteinIntake)} g/day</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaCarrot color="orange" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Fiber Intake:</strong> {Math.round(plan.fiberIntake)} g/day</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaAppleAlt color="green" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Monthly Calorie Intake:</strong> {Math.round(plan.monthlyCalorieIntake)} kcal</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaUtensils color="blue" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Meals Per Day:</strong> {plan.mealsPerDay}</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaHeartbeat color="pink" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Food Plan:</strong> {plan.foodPlan}</Text>
            </Flex>

            <Flex align="center" mb={3}>
              <FaRunning color="red" size={20} style={{ marginRight: "10px" }} />
              <Text><strong>Exercise Plan:</strong> {plan.exercisePlan}</Text>
            </Flex>
          </Flex>

          {/* Buttons */}
          <Flex justify="center" mt={6} spacing={4}>


          <Button mt={4} onClick={() => navigateToPage('Meals')}>Go to Meals</Button>
              <Button mt={4} onClick={() => navigateToPage('FoodPlan')}>Go to Food Plan</Button>
              <Button mt={4} onClick={() => navigateToPage('Exercise')}>Go to Exercise</Button>



          </Flex>
        </Box>
      )}



    </Box>
    <Footer/>
    </>
  );
};

export default GoalForm;
