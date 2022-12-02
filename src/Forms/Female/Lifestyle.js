import React, { useState } from "react";
import {
  ChakraProvider,
  Checkbox,
  CheckboxGroup,
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

function Lifestyle({ activeStep, setActiveStep }) {
  const [stages, setStages] = useState("");
  const [conditions, setConditions] = useState([]);
  const [breastFeeding, setBreastFeeding] = useState("");
  const [sleep, setSleep] = useState("");
  const [stress, setStress] = useState("");
  const [gut, setGut] = useState("");

  const toast = useToast();

  const handleNext = () => {
    console.log(stages, conditions, breastFeeding, sleep, stress, gut);
    if (!stages || !conditions || !breastFeeding || !sleep || !stress || !gut) {
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
        <FormControl id="stages">
          <FormLabel id="stages">
            Are you going through any of these stages?
          </FormLabel>
          <RadioGroup onChange={setStages} value={stages}>
            <Stack direction="row" spacing="20px">
              <Radio value="pregnacy">Pregnancy</Radio>
              <Radio value="postPregnancy">Post-Pregnancy</Radio>
              <Radio value="menopause">Menopause</Radio>
              <Radio value="postCovid">Post-Covid</Radio>
              <Radio value="none">None</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="breasFeeding">
          <FormLabel id="breasFeeding">Are you breastfeeding?</FormLabel>
          <RadioGroup onChange={setBreastFeeding} value={breastFeeding}>
            <Stack direction="row" spacing="20px">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Are you suffering from any of these conditions?</FormLabel>
          <CheckboxGroup
            // maxim={3}
            max={3}
            colorScheme="blue"
            onChange={setConditions}
            value={conditions}
          >
            <Stack
              spacing="5"
              direction="row"
              onChange={(e) => {
                console.log(e.target.value);
                var unique = conditions.filter(
                  (v, i, conditions) => conditions.indexOf(v) === i
                );
                console.log(unique);
                setConditions([...conditions, e.target.value]);
              }}
            >
              <Checkbox value="pcos">Irregular periods (Pcos)</Checkbox>
              <Checkbox value="anaemia">Anaemia</Checkbox>
              <Checkbox value="thyroid">Thyroid</Checkbox>
              <Checkbox value="vitamin">Vitamin/ Other deficiency</Checkbox>
              <Checkbox value="imbalance">Hormonal imbalance</Checkbox>
              <Checkbox value="none">None</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl id="sleep">
          <FormLabel id="sleep">How well do you sleep?</FormLabel>
          <RadioGroup onChange={setSleep} value={sleep}>
            <Stack direction="row" spacing="20px">
              <Radio value="peacefully">Peacefully for 6-8 hours</Radio>
              <Radio value="once">
                Disturbed sleep, I wake up atleast once a night
              </Radio>
              <Radio value="difficulty">Have difficulty falling asleep</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="stress">
          <FormLabel id="stress">How stressed are you?</FormLabel>
          <RadioGroup onChange={setStress} value={stress}>
            <Stack direction="row" spacing="20px">
              <Radio value="no">Not at all</Radio>
              <Radio value="low">Low</Radio>
              <Radio value="moderate">Moderate</Radio>
              <Radio value="high">High</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id="gut">
          <FormLabel id="gut">Do you have any gut problems?</FormLabel>
          <RadioGroup onChange={setGut} value={gut}>
            <Stack direction="row" spacing="20px">
              <Radio value="none">None</Radio>
              <Radio value="acidity">Acidity</Radio>
              <Radio value="indigestion">Indigestion</Radio>
              <Radio value="constipation">Constipation</Radio>
              <Radio value="ibs">IBS</Radio>
              <Radio value="pain">Stomach pain or discomfort</Radio>
              <Radio value="bloating">Bloating and Gas</Radio>
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

export default Lifestyle;
