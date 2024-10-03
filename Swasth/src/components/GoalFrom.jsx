// GoalForm.jsx
import React, { useState } from 'react';
import {
  Box, Button, Input, FormControl, Select, FormLabel, VStack, Text, useToast
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './GoalForm.css'; // Create this CSS file for custom styles

const GoalForm = () => {
  const [goal, setGoal] = useState('');
  const [months, setMonths] = useState('');
  const [plan, setPlan] = useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goal || !months) {
      toast({
        title: 'Please fill all fields.',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // Generate a plan based on user's goal and timeline
    const calorieIntake = goal === 'gain' ? 2500 : 1800;
    const mealsPerDay = goal === 'gain' ? 5 : 3;
    const foodPlan = goal === 'gain'
      ? 'Eat calorie-dense foods like nuts, seeds, whole grains, and dairy.'
      : 'Focus on high-fiber foods like vegetables, lean proteins, and fruits.';
    const exercisePlan = goal === 'gain'
      ? 'Strength training 4-5 times a week, focus on compound movements.'
      : 'Cardio 3-4 times a week, strength training 2-3 times a week.';

    setPlan({
      calorieIntake,
      mealsPerDay,
      foodPlan,
      exercisePlan,
      months,
    });
  };

  return (
    <Box className="goal-form-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
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
              />
            </FormControl>

            <Button colorScheme="teal" type="submit" width="full">
              Get Goal Plan
            </Button>
          </VStack>
        </form>
      </motion.div>

      {plan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="goal-plan"
        >
          <Box mt={8} className="plan-box">
            <Text className="plan-title">Your {months}-month Plan</Text>
            <Text><strong>Calorie Intake:</strong> {plan.calorieIntake} calories/day</Text>
            <Text><strong>Meals per Day:</strong> {plan.mealsPerDay} meals</Text>
            <Text><strong>Food Plan:</strong> {plan.foodPlan}</Text>
            <Text><strong>Exercise Plan:</strong> {plan.exercisePlan}</Text>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default GoalForm;
