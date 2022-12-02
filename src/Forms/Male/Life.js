import React, { useState } from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";

import FormNavBackButton from "../FormNavBackButton";

function Life({ activeStep, setActiveStep }) {
  const [energy, setEnergy] = useState("");
  const [constipated, setConstipated] = useState("");
  const [stress, setStress] = useState("");
  const [sleep, setSleep] = useState("");
  const [problems, setProblems] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");

  const toast = useToast();

  const handleNext = () => {
    console.log(energy, constipated, stress, sleep, stress, bloodPressure);
    if (
      !energy ||
      !constipated ||
      !stress ||
      !sleep ||
      !stress ||
      !bloodPressure
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
        <Text style={{ fontSize: "20px" }}>Your Lifestyle</Text>
        <FormControl id="energy">
          <FormLabel id="energy">How energetic do you feel?</FormLabel>
          <RadioGroup onChange={setEnergy} value={energy}>
            <Stack direction="row" spacing="20px">
              <Radio value="high">Always high</Radio>
              <Radio value="low">
                Low when I wake up, but gradually increases
              </Radio>
              <Radio value="veryLow">Very low in afternoon</Radio>
              <Radio value="lowEvening">Low by evening/night</Radio>
              <Radio value="alwaysLow">Always low</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="constipated">
          <FormLabel id="constipated">Do you feel constipated?</FormLabel>
          <RadioGroup onChange={setConstipated} value={constipated}>
            <Stack direction="row" spacing="20px">
              <Radio value="no">No/Rarely</Radio>
              <Radio value="yes">Yes</Radio>
              <Radio value="bowel">Unsatisfactory bowel movements</Radio>
              <Radio value="ibs">
                Suffering from IBS (irritable bowel syndrome) /dysentery
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="stress">
          <FormLabel id="stress">How stressed are you?</FormLabel>
          <RadioGroup onChange={setStress} value={stress}>
            <Stack direction="row" spacing="20px">
              <Radio value="none">None</Radio>
              <Radio value="low">Low</Radio>
              <Radio value="moderate">Moderate(work, family etc )</Radio>
              <Radio value="high">
                High (Loss of close one, separation, home, illness)
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="sleep">
          <FormLabel id="sleep">How well do you sleep?</FormLabel>
          <RadioGroup onChange={setSleep} value={sleep}>
            <Stack direction="row" spacing="20px">
              <Radio value="six">Very peacefully for 6 to 8 hours</Radio>
              <Radio value="once">
                Disturbed sleep, I wake up at least one time during the night
              </Radio>
              <Radio value="difficulty">Have difficulty falling asleep</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="problems">
          <FormLabel id="problems">
            Okay, what about other problems like Thyroid imbalance, Vitamin D3,
            Vitamin B12 deficiencies, Lipids etc.
          </FormLabel>
          <RadioGroup onChange={setProblems} value={problems}>
            <Stack direction="row" spacing="20px">
              <Radio value="yes">Yes</Radio>
              <Radio value="once">No</Radio>
              <Radio value="difficulty">Not Sure</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl id="bloodPressure">
          <FormLabel id="bloodPressure">
            Do you have Blood Pressure problem?
          </FormLabel>
          <RadioGroup onChange={setBloodPressure} value={bloodPressure}>
            <Stack direction="row" spacing="20px">
              <Radio value="none">None</Radio>
              <Radio value="yesHigh">Yes, high BP issue</Radio>
              <Radio value="yesLow">Yes, low BP issue</Radio>
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

export default Life;
