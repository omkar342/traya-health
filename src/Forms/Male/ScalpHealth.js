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

function ScalpHealth({ activeStep, setActiveStep }) {
  const toast = useToast();
  const [hairLoss, setHairLoss] = useState("");
  const [hairGoals, setHairGoals] = useState([]);
  const [dandruff, setDandruff] = useState("");
  const [describeHairfall, setDescribeHairfall] = useState("");
  const [image, setImage] = useState("");

  const handleNext = () => {
    console.log(hairLoss, hairGoals, dandruff, describeHairfall, image);
    if (!hairLoss) {
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
        <FormControl id="dandruff">
          <FormLabel id="dandruff">Do you have dandruff?</FormLabel>
          <RadioGroup onChange={setDandruff} value={dandruff}>
            <Stack direction="row" spacing="20px">
              <Radio value="no">No</Radio>
              <Radio value="mild">Yes, mild that comes and goes</Radio>
              <Radio value="heavy">
                Yes, heavy dandruff that sticks to the scalp
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>What are your major hair goals?</FormLabel>
          <FormLabel>Choose as many as you like</FormLabel>
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
              <Checkbox value="regrow">Regrow hair</Checkbox>
              <Checkbox value="hairfall">Control hair fall</Checkbox>
              <Checkbox value="maintain">
                I have a good set of hair, I want to maintain it.
              </Checkbox>
              <Checkbox value="quality ">Work on hair quality</Checkbox>
              <Checkbox value="greying">Delay greying</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl id="hairLoss">
          <FormLabel id="hairLoss">Family history of Hair loss</FormLabel>
          <RadioGroup onChange={setHairLoss} value={hairLoss}>
            <Stack direction="row" spacing="20px">
              <Radio value="mother">
                Mother or anyone from mother's side of the family
              </Radio>
              <Radio value="father">
                Father or anyone from father's side of the family
              </Radio>
              <Radio value="both">Both </Radio>
              <Radio value="none">None </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="describe">
          <FormLabel id="describe">
            How would you describe your hair loss to a doctor?
          </FormLabel>
          <RadioGroup onChange={setDescribeHairfall} value={describeHairfall}>
            <Stack direction="row" spacing="20px">
              <Radio value="receding">
                Receding hairline-forehead is larger than before
              </Radio>
              <Radio value="crown">Crown-top of your head</Radio>
              <Radio value="both">Both receding hairline and crown</Radio>
              <Radio value="bald">
                Spots of small bald patches on the head or other parts of the
                body
              </Radio>
              <Radio value="heavy">Heavy hair loss across the head</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="image">
          <FormLabel id="image">
            Which image best describes your hair loss?
          </FormLabel>
          <RadioGroup onChange={setImage} value={image}>
            <Stack direction="row" spacing="20px">
              <Radio value="1">Stage - 1</Radio>
              <Radio value="2">Stage - 2</Radio>
              <Radio value="3">Stage - 3</Radio>
              <Radio value="4">Stage - 4</Radio>
              <Radio value="5">Stage - 5</Radio>
              <Radio value="6">Stage - 6</Radio>
              <Radio value="coin">Coin Size Patch</Radio>
              <Radio value="hairfall">Heavy Hair Fall Across The Head</Radio>
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

export default ScalpHealth;
