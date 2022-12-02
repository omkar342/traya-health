import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
  HStack,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import classes from "./Intro.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import FormNavBackButton from "./FormNavBackButton";

function Intro({
  activeStep,
  setActiveStep,
  realActiveStep,
  setRealActiveStep,
}) {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();

  const toast = useToast();

  const handleNext = () => {
    console.log(name, email, phone, age, gender);
    console.log(activeStep, realActiveStep);

    if (!name || !email || !phone || !age || !gender) {
      toast({
        title: "Please fill all the fields.",
        description: "You haven't filled all the fields.",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
        status: "warning",
      });
      return;
    }
    if (gender === "male") {
      setRealActiveStep(0);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setRealActiveStep(1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  return (
    <ChakraProvider>
      <VStack
        width="100%"
        spacing="5px"
        style={{ padding: "2.5rem 1.5rem 3.5rem" }}
      >
        <Text style={{ fontSize: "20px" }}>A bit about you!</Text>
        <FormControl id="name" isRequired>
          <FormLabel id="name">Name</FormLabel>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            htmlFor="name"
            type="text"
            placeholder="Enter Your Name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Phone Number"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel id="email">Email</FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            htmlFor="email"
            placeholder="Enter Your Email"
          />
        </FormControl>
        <FormControl id="age" isRequired>
          <FormLabel id="age">Age</FormLabel>
          <Input
            htmlFor="age"
            placeholder="Enter Your Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="gender">
          <FormLabel id="gender">Gender</FormLabel>
          <RadioGroup onChange={setGender} value={gender}>
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <Stack
          style={{
            marginTop: "0.5rem",
          }}
          direction="row"
        >
          <FormNavBackButton
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <Button onClick={handleNext} variant="solid" colorScheme="blue">
            Next
          </Button>
        </Stack>
      </VStack>
    </ChakraProvider>
  );
}

export default Intro;
