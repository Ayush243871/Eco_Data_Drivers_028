import { Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';
import { FaAppleAlt, FaFire, FaCarrot } from 'react-icons/fa'; // Icons for nutrients

export default function Food({ handleDeleteFoodItem, item, food = {
    id: 9999,
    name: "Enter Food",
    serving: "0g",
    protein: "0g",
    calories: "0",
    sugar: "0",
} , onAdd, onRemove }) { // Use default parameter for food
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="md" 
            boxShadow="lg" 
            p={4} 
            bg="white" 
            transition="all 0.2s"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }} // Hover effect
            mb={4} // Margin bottom for spacing between cards
        >
            <Flex justify="space-between" align="center" mb={2}>
                <Text fontWeight="bold" fontSize="lg">{food.name}</Text>
                <IconButton 
                    aria-label="Delete food item" 
                    icon={<MdDeleteForever />} 
                    colorScheme="red" 
                    variant="outline" 
                    onClick={() => handleDeleteFoodItem(food.id)}
                />
            </Flex>
            <Text fontSize="sm" color="gray.500" mb={2}>
                Per <b>{food.serving}g</b> serving
            </Text>

            <Flex direction="column" mb={4} color="gray.700">
                <Flex align="center" mb={1}>
                    <FaAppleAlt style={{ marginRight: '5px' }} />
                    <Text fontSize="sm"><b>Protein:</b> {food.protein}g</Text>
                </Flex>
                <Flex align="center" mb={1}>
                    <FaFire style={{ marginRight: '5px' }} />
                    <Text fontSize="sm"><b>Calories:</b> {food.calories}</Text>
                </Flex>
                <Flex align="center" mb={1}>
                    <FaCarrot style={{ marginRight: '5px' }} />
                    <Text fontSize="sm"><b>Sugar:</b> {food.sugar}</Text>
                </Flex>
            </Flex>

            <Flex justify="center" align="center">
                {item ? (
                    <Flex align="center">
                        <Button 
                            onClick={() => onRemove(item)} 
                            colorScheme="teal" 
                            variant="outline" 
                            size="sm"
                            mr={2} // Margin right for spacing
                        >
                            -
                        </Button>
                        <Text mx={2}>{item.qty}</Text>
                        <Button 
                            onClick={() => onAdd(item)} 
                            colorScheme="teal" 
                            variant="outline" 
                            size="sm"
                            ml={2} // Margin left for spacing
                        >
                            +
                        </Button>
                    </Flex>
                ) : (
                    <Button 
                        onClick={() => onAdd(food)} 
                        colorScheme="teal" 
                        variant="solid" 
                        size="sm" 
                        width="full"
                    >
                        Add Meal
                    </Button>
                )}
            </Flex>
        </Box>
    );
}




// import { Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
// import { MdDeleteForever } from 'react-icons/md';
// import { FaAppleAlt, FaFire, FaCarrot } from 'react-icons/fa'; // Icons for nutrients

// export default function Food({ handleDeleteFoodItem, item, food, onAdd, onRemove }) {
//     return (
//         <Box 
//             borderWidth="1px" 
//             borderRadius="md" 
//             boxShadow="lg" 
//             p={4} 
//             bg="white" 
//             transition="all 0.2s"
//             _hover={{ boxShadow: "xl", transform: "scale(1.02)" }} // Hover effect
//             mb={4} // Margin bottom for spacing between cards
//         >
//             <Flex justify="space-between" align="center" mb={2}>
//                 <Text fontWeight="bold" fontSize="lg">{food.name}</Text>
//                 <IconButton 
//                     aria-label="Delete food item" 
//                     icon={<MdDeleteForever />} 
//                     colorScheme="red" 
//                     variant="outline" 
//                     onClick={() => handleDeleteFoodItem(food.id)}
//                 />
//             </Flex>
//             <Text fontSize="sm" color="gray.500" mb={2}>
//                 Per <b>{food.serving}g</b> serving
//             </Text>

//             <Flex direction="column" mb={4} color="gray.700">
//                 <Flex align="center" mb={1}>
//                     <FaAppleAlt style={{ marginRight: '5px' }} />
//                     <Text fontSize="sm"><b>Protein:</b> {food.protein}g</Text>
//                 </Flex>
//                 <Flex align="center" mb={1}>
//                     <FaFire style={{ marginRight: '5px' }} />
//                     <Text fontSize="sm"><b>Calories:</b> {food.calories}</Text>
//                 </Flex>
//                 <Flex align="center" mb={1}>
//                     <FaCarrot style={{ marginRight: '5px' }} />
//                     <Text fontSize="sm"><b>Sugar:</b> {food.sugar}</Text>
//                 </Flex>
//             </Flex>

//             <Flex justify="center" align="center">
//                 {item ? (
//                     <Flex align="center">
//                         <Button 
//                             onClick={() => onRemove(item)} 
//                             colorScheme="teal" 
//                             variant="outline" 
//                             size="sm"
//                             mr={2} // Margin right for spacing
//                         >
//                             -
//                         </Button>
//                         <Text mx={2}>{item.qty}</Text>
//                         <Button 
//                             onClick={() => onAdd(item)} 
//                             colorScheme="teal" 
//                             variant="outline" 
//                             size="sm"
//                             ml={2} // Margin left for spacing
//                         >
//                             +
//                         </Button>
//                     </Flex>
//                 ) : (
//                     <Button 
//                         onClick={() => onAdd(food)} 
//                         colorScheme="teal" 
//                         variant="solid" 
//                         size="sm" 
//                         width="full"
//                     >
//                         Add Meal
//                     </Button>
//                 )}
//             </Flex>
//         </Box>
//     );
// }

// Food.defaultProps = {
//     id: 9999,
//     name: "Enter Food",
//     serving: "0g",
//     protein: "0g"
// };
