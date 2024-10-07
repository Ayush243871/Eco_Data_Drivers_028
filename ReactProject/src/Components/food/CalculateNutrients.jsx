import PropTypes from "prop-types";
import { Box, Button, Text, Flex, Heading } from "@chakra-ui/react";
import {
  FaMinus,
  FaPlus,
  FaCarrot,
  FaBalanceScale,
  FaUtensils,
  FaAppleAlt,
  FaBreadSlice, // Add icon for carbohydrates
} from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRemainingNutrients } from "../../store/nutritionSlice";
export default function CalculateNutrients({
  mealItems,
  countMealItems,
  onAdd,
  onRemove,
  targProtein,
  targCalories,
  targSugar,
  // targCarbs, // Accept target carbs
}) {

  const dispatch = useDispatch();
  const totalProtein = Math.round(
    mealItems.reduce((acc, item) => acc + item.qty * item.protein, 0)
  );
  const totalServing = Math.round(
    mealItems.reduce((a, item) => a + item.qty * item.serving, 0)
  );
  const totalCalories = Math.round(
    mealItems.reduce((a, item) => a + item.qty * item.calories, 0)
  );
  
  const totalSugar = Math.round(
    mealItems.reduce((a, item) => a + item.qty * item.sugar, 0)
  );
  // const totalCarbs = Math.round(
  //   mealItems.reduce((a, item) => a + item.qty * item.carbs, 0) // Calculate total carbs
  // );

  const remainingProtein = Math.round(targProtein - totalProtein);
  const remainingCalories = Math.round(targCalories - totalCalories);
  const remainingSugar = Math.round(targSugar - totalSugar);
  // const remainingCarbs = Math.round(targCarbs - totalCarbs); // Calculate remaining carbs

  useEffect(() => {
    dispatch(
      setRemainingNutrients({
        remainingProtein,
        remainingCalories,
        remainingSugar,
        totalCalories,
      })
    );
  }, [dispatch, remainingProtein, remainingCalories, remainingSugar, totalCalories]);

  return (
    <Box
      p={5}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      fontFamily="'Arial', sans-serif">
      <Flex alignItems="center" mb={4}>
        <FaAppleAlt style={{ color: "#4db6ac", marginRight: "10px" }} />
        <Heading size="md" color="#00796b">
          Total Food Items &nbsp; {countMealItems || 0}
        </Heading>
      </Flex>
      <Text color="#004d40" mb={4}>
        <strong>Target: {targCalories} Cal</strong>
      </Text>

      {mealItems.length === 0 ? (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={3}
            bg="#e0f2f1"
            borderRadius="md"
            mb={4}>
            <Text fontWeight="bold" color="#004d40">
              Target
            </Text>
            <Box>
              <Text>
                Protein <b>{targProtein}g</b>
              </Text>
              <Text>
                Calories <b>{targCalories}c</b>
              </Text>
              <Text>
                Sugar <b>{targSugar}g</b>
              </Text>
          
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Flex alignItems="center" mb={2}>
            <Box display="flex" gap={2}>
              {/* Additional UI elements can go here */}
            </Box>
            <Text color="#004d40" mr={5} ml={5}>
              Quantity - +
            </Text>
            <Text flexGrow={1} color="#004d40">
              Name
            </Text>
            <Text textAlign="right" color="#00796b" ml={3} mr={3}>
              <small>Prot</small>
            </Text>
            <Text textAlign="right" color="#00796b" ml={3} mr={3}>
              <small>Cal</small>
            </Text>
            <Text textAlign="right" color="#00796b" ml={3} mr={3}>
              <small>Serv</small>
            </Text>
 
          </Flex>
          <hr />

          {mealItems.map((item) => (
            <Flex
              key={item.id}
              alignItems="center"
              mb={4}
              justifyContent="space-between"
              p={3}
              border="1px"
              borderColor="gray.200"
              borderRadius="md">
              <Box display="flex" gap={2}>
                <Button
                  onClick={() => onRemove(item)}
                  colorScheme="red"
                  size="sm"
                  aria-label="Remove item">
                  <FaMinus />
                </Button>
                <Button
                  onClick={() => onAdd(item)}
                  colorScheme="teal"
                  size="sm"
                  aria-label="Add item">
                  <FaPlus />
                </Button>
              </Box>
              <Text
                flexGrow={1}
                color="#004d40"
                fontWeight="medium"
                textAlign="left"
                ml={4}>
                <small>x{item.qty}</small> {item.name}
              </Text>
              <Flex alignItems="center" gap={2}>
                <Text textAlign="right" color="#00796b">
                  <FaCarrot /> {Math.round(item.protein * item.qty)}g
                </Text>
                <Text textAlign="right" color="#00796b">
                  <FaBalanceScale /> {Math.round(item.calories * item.qty)} cal
                </Text>
                <Text textAlign="right" color="#00796b">
                  <FaUtensils /> {Math.round(item.serving * item.qty)}
                </Text>
                
              </Flex>
            </Flex>
          ))}
          <Box
            mb={2}
            p={3}
            bg="#e0f2f1"
            borderRadius="md"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <Text fontWeight="bold" color="#004d40">
                Total
              </Text>
              <Text>
                Protein <b>{totalProtein}g</b>
              </Text>
              <Text>
                Calories <b>{totalCalories}g</b>
              </Text>
              <Text>
                Sugar <b>{totalSugar}g</b>
              </Text>
             
            </Box>
          </Box>

          <hr style={{ marginBottom: "6px" }} />

          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4} p={3} bg="#e0f2f1" borderRadius="md" mb={4}>
            <Box>
              <Text fontWeight="bold" color="#004d40">
                Target
              </Text>
              <Text>
                Protein <b>{targProtein}g</b>
              </Text>
              <Text>
                Calories <b>{targCalories === 0 ? "0 cal" : targCalories}</b>
              </Text>
              <Text>
                Sugar <b>{targSugar}g</b>
              </Text>
            
            </Box>
            <Box>
              <Text fontWeight="bold" color="#004d40">
                Remaining
              </Text>
              <Text>
                Protein <b>{remainingProtein < 0 ? 0 : remainingProtein}g</b>
              </Text>
              <Text>
                Calories{" "}
                <b>{remainingCalories < 0 ? "0 cal" : remainingCalories}</b>
              </Text>
              <Text>
                Sugar <b>{remainingSugar < 0 ? 0 : remainingSugar}g</b>
              </Text>
     
            </Box>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4} p={3} bg="#e0f2f1" borderRadius="md">
            <Box>
              <Text fontWeight="bold" color="#004d40">
                Total Food Nutrients
              </Text>
              <Text>
                <small>Serving</small> <b>{totalServing}g</b>
              </Text>
              <Text>
                <small>Protein</small> <b>{totalProtein}g</b>
              </Text>
              <Text>
                <small>Calories</small> <b>{totalCalories}g</b>
              </Text>
              <Text>
                <small>Sugar</small> <b>{totalSugar}g</b>
              </Text>
             
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

CalculateNutrients.propTypes = {
  mealItems: PropTypes.array.isRequired,
  countMealItems: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  targProtein: PropTypes.number.isRequired,
  targCalories: PropTypes.number.isRequired,
  targSugar: PropTypes.number.isRequired,
};