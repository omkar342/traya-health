import {
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import classes from "./Intro.module.css";
import { ChakraProvider } from "@chakra-ui/react";

function Intro() {
  const [value, setValue] = useState("");

  return (
    <ChakraProvider>
      <VStack width="100%" spacing="5px" style={{ padding: "3.5rem 1.5rem" }}>
        <FormControl id="name" isRequired>
          <FormLabel id="name">Name</FormLabel>
          <Input htmlFor="name" type="text" placeholder="Enter Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <Input type="text" placeholder="Enter Your Phone Number" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel id="email">Email</FormLabel>
          <Input
            htmlFor="email"
            placeholder="Enter Your Email"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="age" isRequired>
          <FormLabel id="age">Age</FormLabel>
          <Input
            htmlFor="age"
            placeholder="Enter Your Age"
            onChange={(e) => {
              // setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="gender">
          <FormLabel id="gender">Gender</FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="row">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </VStack>
    </ChakraProvider>
  );
}

export default Intro;
