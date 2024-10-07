import React, { useState, useEffect } from "react";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";
import './HealthForm.css'; // Import the CSS file

const HealthForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("healthFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          age: "",
          gender: "",
          height: "",
          weight: "",
          diet: "vegetarian",
          fitnessLevel: "",
        };
  });

  const [feedback, setFeedback] = useState("");
  const [dietPlan, setDietPlan] = useState("");
  const [showResult, setShowResult] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const GotoGoalForm = () => {
    navigate("/Main/GoalForm");
  };

  useEffect(() => {
    localStorage.setItem("healthFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const handlePageRefresh = () => {
      setFormData({
        age: "",
        gender: "",
        height: "",
        weight: "",
        diet: "vegetarian",
        fitnessLevel: "",
      });
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { height, weight, diet } = formData;
    const bmi = (weight / (height / 100) ** 2).toFixed(1);

    let weightFeedback = "";
    if (bmi < 18.5) {
      weightFeedback = "You should gain weight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      weightFeedback = "Your weight is healthy.";
    } else {
      weightFeedback = "You should lose weight.";
    }

    let personalizedDiet = "";
    if (weightFeedback.includes("gain")) {
      personalizedDiet =
        diet === "vegetarian"
          ? "Eat more calorie-dense foods like nuts, seeds, whole grains, and legumes."
          : "Include lean meats, eggs, dairy, and calorie-rich foods like avocados.";
    } else if (weightFeedback.includes("lose")) {
      personalizedDiet =
        diet === "vegetarian"
          ? "Focus on low-calorie foods like leafy greens, fruits, and whole grains."
          : "Incorporate lean meats, fish, and vegetables, avoiding fatty and fried foods.";
    } else {
      personalizedDiet =
        "Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.";
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

  const boxPadding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <>
      {/* Apply background image */}

      <Box
        className="form-container"
        p={boxPadding}
      >
        <Heading as="h1" size="lg">
         Personalized feedback
        </Heading>
        <form onSubmit={handleSubmit} style={{
            opacity: "10",
        }}> 
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
            <Box className="feedback-box">
              <Text className="feedback-text">Feedback: {feedback}</Text>
              <Text>Diet Plan: {dietPlan}</Text>
              <Button mt={4} colorScheme="blue" onClick={GotoGoalForm}>
                Set Goal
              </Button>
            </Box>
          </ScaleFade>
        )}
      </Box>
      <Footer className="footer" />
    </>
  );
};

export default HealthForm;
