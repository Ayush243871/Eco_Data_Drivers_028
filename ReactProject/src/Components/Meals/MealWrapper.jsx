import { useState, useEffect, useContext } from "react";
import AOS from "aos"; // Import AOS for scroll animations
import "aos/dist/aos.css"; // Import AOS styles
import "./MealWrapper.css";
import "../styles/searchFood.css";
import CalculateNutrients from "../food/CalculateNutrients";
import FoodContext from "../context/FoodContext";
import SearchFood from "../food/SearchFood";
import FetchFoodApi from "../food/FetchFoodApi";
import SetTargets from "../shared/SetTargets";
import FoodList from "../food/FoodList";
import SavedMealsList from "../savedMeals/SavedMealList";
import Footer from "../Footer/footer";
import { Box, Flex, Text } from "@chakra-ui/react";
import Chatbot from "../chatbot/Chatbot";

function MealWrapper() {

  const { foods } = useContext(FoodContext);
  const [searchText, setSearchText] = useState("");
  const [mealItems, setMealItems] = useState([]);

  const [targetProtein, setTargetProtein] = useState(0);
  const [targetCalories, setTargetCalories] = useState(0);
  const [targetSugar, setTargetSugar] = useState(0);

  const handleAddTargets = (prot, cal, sug) => {
    setTargetProtein(Number(prot)); 
    setTargetCalories(Number(cal));
    setTargetSugar(Number(sug));

    localStorage.setItem("prot", JSON.stringify(prot));
    localStorage.setItem("cal", JSON.stringify(cal));
    localStorage.setItem("sug", JSON.stringify(sug));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations

    setTargetProtein(
      localStorage.getItem("prot") ? Number(JSON.parse(localStorage.getItem("prot"))) : 0
    );
    setTargetCalories(
      localStorage.getItem("cal") ? Number(JSON.parse(localStorage.getItem("cal"))) : 0
    );
    setTargetSugar(
      localStorage.getItem("sug") ? Number(JSON.parse(localStorage.getItem("sug"))) : 0
    );
  }, []);

  const onAdd = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists) {
      const newMealItems = mealItems.map(
        (x) => (x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x)
      );
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }];
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    }
  };

  const onRemove = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists.qty === 1) {
      const newMealItems = mealItems.filter((x) => x.id !== meal.id);
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    } else {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty - 1 } : x
      );
      setMealItems(newMealItems);
      localStorage.setItem("mealItems", JSON.stringify(newMealItems));
    }
  };

  useEffect(() => {
    setMealItems(
      localStorage.getItem("mealItems") ? JSON.parse(localStorage.getItem("mealItems")) : []
    );
  }, []);

  const [day, setDay] = useState("");

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

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Heading for Meal Tracking */}
          <div className="wrapper-card" data-aos="fade-up">
            <Box bg="white" p={4} shadow="md" borderRadius="md" mb={4}>
              <Flex justify="space-between" align="center">
                <Text fontSize="2xl" fontWeight="bold" color="teal.600">
                  Track Today's Meals
                </Text>
                <Text fontSize="xl" color="gray.500">
                  {day}
                </Text>
              </Flex>
            </Box>
            <SetTargets handleAddTargets={handleAddTargets} />
          </div>

          {/* Heading for Fetching Food API */}
          <div className="col-bot" data-aos="fade-up">
            <Text fontSize="2xl" fontWeight="bold" color="teal.600">
              Get Your Meal Data
            </Text>
            <div className="wrapper-card">
              <FetchFoodApi />
            </div>
          </div>

          {/* Heading for Search Food and Food List */}
          <div className="row">
            <div className="wrapper-card-food-list" data-aos="fade-up">
              <Text fontSize="2xl" fontWeight="bold" color="teal.600">
                Search and Add Meals
              </Text>
              <SearchFood handleSearchFood={setSearchText} />
              <FoodList
                food_data={foods.filter((food) =>
                  food.name.toLowerCase().includes(searchText)
                )}
                onAdd={onAdd}
                onRemove={onRemove}
                mealItems={mealItems}
              />
            </div>

            {/* Heading for Nutrient Calculation */}
            <div className="wrapper-card-calculate-rightCol" data-aos="fade-up">
              <Text fontSize="2xl" fontWeight="bold" color="teal.600">
                Nutrient Summary
              </Text>
              <CalculateNutrients
                onAdd={onAdd}
                onRemove={onRemove}
                mealItems={mealItems}
                countMealItems={mealItems.length}
                targProtein={targetProtein}
                targCalories={targetCalories}
                targSugar={targetSugar}
              />
            </div>
          </div>

          {/* Heading for Saved Meals */}
          <div className="wrapper-card" data-aos="fade-up">
            <Text fontSize="2xl" fontWeight="bold" color="teal.600">
              Your Consumed Meals
            </Text>
            <SavedMealsList
              countMealItems={mealItems.length}
              mealItems={mealItems}
            />
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </>
  );
}

export default MealWrapper;
