import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Text,
  useToast,
  ScaleFade,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HealthForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    diet: 'vegetarian',
    fitnessLevel: '',
  });
  const [feedback, setFeedback] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [showResult, setShowResult] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { age, gender, height, weight, diet } = formData;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    let weightFeedback = '';
    if (bmi < 18.5) {
      weightFeedback = 'You should gain weight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      weightFeedback = 'Your weight is healthy.';
    } else {
      weightFeedback = 'You should lose weight.';
    }

    let personalizedDiet = '';
    if (weightFeedback.includes('gain')) {
      personalizedDiet = diet === 'vegetarian' 
        ? 'Eat more calorie-dense foods like nuts, seeds, whole grains, and legumes.' 
        : 'Include lean meats, eggs, dairy, and calorie-rich foods like avocados.';
    } else if (weightFeedback.includes('lose')) {
      personalizedDiet = diet === 'vegetarian' 
        ? 'Focus on low-calorie foods like leafy greens, fruits, and whole grains.' 
        : 'Incorporate lean meats, fish, and vegetables, avoiding fatty and fried foods.';
    } else {
      personalizedDiet = 'Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.';
    }

    setFeedback(weightFeedback);
    setDietPlan(personalizedDiet);
    setShowResult(true);
    toast({
      title: "Feedback generated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRedirect = () => {
    if (feedback.includes('gain')) {
      navigate('/gain-weight');
    } else if (feedback.includes('lose')) {
      navigate('/lose-weight');
    }
  };

  return (
    <Box bg="white" p={8} borderRadius="lg" boxShadow="xl" maxW="md" mx="auto" mt={10}>
      <Heading as="h1" size="lg" textAlign="center" mb={6}>
        Health and Diet Plan
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              isRequired
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Height (in cm)</FormLabel>
            <Input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel>Weight (in kg)</FormLabel>
            <Input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel>Diet Preference</FormLabel>
            <Select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              isRequired
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Fitness Level</FormLabel>
            <Select
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleChange}
              isRequired
            >
              <option value="">Select Fitness Level</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </Select>
          </FormControl>

          <Button colorScheme="teal" type="submit" width="full">
            Get Feedback
          </Button>
        </VStack>
      </form>

      {showResult && (
        <ScaleFade initialScale={0.9} in={showResult}>
          <Box mt={8} p={6} bg="teal.50" borderRadius="md">
            <Text fontWeight="bold" mb={2}>
              Feedback: {feedback}
            </Text>
            <Text>Diet Plan: {dietPlan}</Text>
            <Button mt={4} colorScheme="blue" onClick={handleRedirect}>
              See Your Goal Plan
            </Button>
          </Box>
        </ScaleFade>
      )}
    </Box>
  );
};

export default HealthForm;
