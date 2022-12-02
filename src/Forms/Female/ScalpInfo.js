import {
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import FormNavBackButton from "../FormNavBackButton";

function ScalpInfo({ activeStep, setActiveStep }) {
  const toast = useToast();
  const [hairType, setHairType] = useState("");
  const [hairOily, setHairOily] = useState("");
  const [hairGoals, setHairGoals] = useState([]);
  const [dandruff, setDandruff] = useState("");
  const [thickness, setThickness] = useState("");
  const [strands, setStrands] = useState("");

  const handleNext = () => {
    // console.log(hairGoals);
    console.log(hairType, hairOily, hairGoals, dandruff, thickness, strands);
    if (
      !hairType ||
      !hairOily ||
      !hairGoals ||
      !dandruff ||
      !thickness ||
      !strands
    ) {
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <ChakraProvider>
      <VStack
        width="100%"
        spacing="5px"
        style={{ padding: "2.5rem 1.5rem 3.5rem" }}
      >
        <Text style={{ fontSize: "20px" }}>Scalp Health</Text>
        <FormControl id="hairType">
          <FormLabel id="hairType">Hair Type</FormLabel>
          <RadioGroup onChange={setHairType} value={hairType}>
            <Stack direction="row" spacing="20px">
              <Radio value="straight">Straight</Radio>
              <Radio value="wavy">Wavy</Radio>
              <Radio value="curly">Curly</Radio>
              <Radio value="coily">Coily</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="hairOily">
          <FormLabel id="hairOily">
            How long after the wash does your hair start to feel oily?
          </FormLabel>
          <RadioGroup onChange={setHairOily} value={hairOily}>
            <Stack direction="row" spacing="20px">
              <Radio value="1">Within 24 hours</Radio>
              <Radio value="2">2-3 days</Radio>
              <Radio value="3">More than 4 </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Hair Goals</FormLabel>
          <FormLabel>Choose upto three goals</FormLabel>
          <CheckboxGroup
            // maxim={3}
            max={3}
            colorScheme="blue"
            onChange={setHairGoals}
            value={hairGoals}
          >
            <Stack
              spacing="5"
              direction="row"
              onChange={(e) => {
                console.log(e.target.value);
                var unique = hairGoals.filter(
                  (v, i, hairGoals) => hairGoals.indexOf(v) === i
                );
                console.log(unique);
                setHairGoals([...hairGoals, e.target.value]);
              }}
            >
              <Checkbox value="hairfall">Anti Hairfall</Checkbox>
              <Checkbox value="dandruff">Anti Dandruff</Checkbox>
              <Checkbox value="volume">High Volume</Checkbox>
              <Checkbox value="length">More Length</Checkbox>
              <Checkbox value="greying">Hair Greying</Checkbox>
              <Checkbox value="overallHealth">Overall Health</Checkbox>
              <Checkbox value="damage">Hair Damage</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl id="dandruff">
          <FormLabel id="dandruff">Describe your dandruff</FormLabel>
          <RadioGroup onChange={setDandruff} value={dandruff}>
            <Stack direction="row" spacing="20px">
              <Radio value="seasonal">Seasonal</Radio>
              <Radio value="powder">Mild-Dry & Powder like</Radio>
              <Radio value="sticky">Heavy-Oily, flaky & sticky</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="thickness">
          <FormLabel id="thickness">
            How thick is each strand of your hair
          </FormLabel>
          <RadioGroup onChange={setThickness} value={thickness}>
            <Stack direction="row" spacing="20px">
              <Radio value="thin">Thin</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="thick">Thick</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="strands">
          <FormLabel id="strands">
            How many strands do you lose in a day?
          </FormLabel>
          <RadioGroup onChange={setStrands} value={strands}>
            <Stack direction="row" spacing="20px">
              <Radio value="50">50-100 strands</Radio>
              <Radio value="100">100-150 strands</Radio>
              <Radio value="150">More than 150 strands</Radio>
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

export default ScalpInfo;
