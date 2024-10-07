import React, { useState } from "react";
import { FaPlus, FaCarrot, FaAppleAlt, FaLeaf, FaBreadSlice, FaWeight } from "react-icons/fa";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

export default function AddFoodModal({ handleAddFoodItem }) {
  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [protein, setProtein] = useState("");
  const [calories, setCalories] = useState("");
  const [sugar, setSugar] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddFoodItem(name, serving, protein, calories, sugar);
    setName("");
    setServing("");
    setProtein("");
    setCalories("");
    setSugar("");
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");
  const hoverColor = useColorModeValue("gray.200", "gray.600");

  return (
    <div>
      <Button
        onClick={openModal}
        bg={bg}
        color={color}
        _hover={{ bg: hoverColor, transform: "scale(1.05)" }}
        leftIcon={<FaPlus />}
      >
        Add Food
      </Button>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Meal To The List</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgImage="url('/path/to/your/food-background.jpg')" bgSize="cover" bgPosition="center">
            <FormControl mb={4}>
              <FormLabel>Food name</FormLabel>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Chicken Breast"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Serving size</FormLabel>
              <Box display="flex" alignItems="center">
                <FaBreadSlice style={{ marginRight: "8px" }} />
                <Input
                  type="number"
                  id="serving"
                  value={serving}
                  onChange={(e) => setServing(e.target.value)}
                  placeholder="e.g., 100g"
                />
              </Box>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Protein amount</FormLabel>
              <Box display="flex" alignItems="center">
                <FaWeight style={{ marginRight: "8px" }} />
                <Input
                  type="number"
                  id="protein"
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                  placeholder="e.g., 25g"
                />
              </Box>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Calories</FormLabel>
              <Box display="flex" alignItems="center">
                <FaAppleAlt style={{ marginRight: "8px" }} />
                <Input
                  type="number"
                  id="calories"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="e.g., 200"
                />
              </Box>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Sugar</FormLabel>
              <Box display="flex" alignItems="center">
                <FaLeaf style={{ marginRight: "8px" }} />
                <Input
                  type="number"
                  id="sugar"
                  value={sugar}
                  onChange={(e) => setSugar(e.target.value)}
                  placeholder="e.g., 5g"
                />
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              onClick={handleSubmit}
              bg={bg}
              color={color}
              _hover={{ bg: hoverColor, transform: "scale(1.05)" }}
              transition="transform 0.2s"
            >
              Add Food
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
