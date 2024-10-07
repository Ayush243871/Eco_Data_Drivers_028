import { Box } from "@chakra-ui/react";
import SavedMealItem from "./SavedMealitem";

export default function SavedMealsList({ countMealItems, mealItems }) {
  return (
    <Box 
      p={5} 
   
      width="full" // Use full width
      bg="gray.50" 
      borderRadius="lg" 
      boxShadow="md" 
      mt={5} 
    >
      <div >
        <SavedMealItem countMealItems={countMealItems} mealItems={mealItems} />
      </div>
    </Box>
  );
}
