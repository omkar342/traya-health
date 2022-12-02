import React, { useState } from "react";
import classes from "./MultiStepForm.module.css";
import Box from "@mui/material/Box";
import { Step, StepButton, StepLabel, Stepper } from "@mui/material";
import Intro from "./Intro";
import { Container, Text } from "@chakra-ui/react";
import ScalpInfo from "./Female/ScalpInfo";
import ScalpHealth from "./Male/ScalpHealth";
import Lifestyle from "./Female/Lifestyle";
import Life from "./Male/Life";

function MultiStepForm() {
  const steps = ["A Bit About You", "Know Your Hair", "Your Lifestyle"];

  const [activeStep, setActiveStep] = useState(0);
  const [realActiveStep, setRealActiveStep] = useState(0);

  // const handleStep = (step) => {
  //   console.log(step);
  //   // setActiveStep(step);
  // };

  const handleStep = (step) => () => {
    console.log(step);
    setActiveStep(step);
  };

  console.log(activeStep, realActiveStep);

  return (
    // <div className={classes.MultiStepForm}>
    <Box sx={{ padding: "30px 20px" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step
            key={label}
            //  completed={completed[index]}
          >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {activeStep == steps.length ? (
        <Box
          display="flex"
          justifyContent="center"
          bg="white"
          padding="20px"
          width="70%"
          margin="3rem auto"
          borderRadius="10px"
          border="10px solid #BEE3F8"
        >
          <Text style={{ fontSize: "30px" }}>Steps are Completed</Text>
        </Box>
      ) : (
        <Container
          color="#2c5282"
          maxW="2xl"
          p="10px 5rem"
          mt="4"
          centerContent
        >
          <Box
            display="flex"
            justifyContent="center"
            bg="white"
            width="100%"
            margin="3rem 0px"
            borderRadius="10px"
            border="10px solid #BEE3F8"
          >
            {activeStep + 1 == 1 && (
              <Intro
                realActiveStep={realActiveStep}
                setRealActiveStep={setRealActiveStep}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}

            {activeStep + 1 == 2 && realActiveStep == 1 && (
              <ScalpInfo
                realActiveStep={realActiveStep}
                setRealActiveStep={setRealActiveStep}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}
            {activeStep + 1 == 2 && realActiveStep == 0 && (
              <ScalpHealth
                realActiveStep={realActiveStep}
                setRealActiveStep={setRealActiveStep}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}

            {activeStep + 1 == 3 && realActiveStep == 1 && (
              <Lifestyle
                realActiveStep={realActiveStep}
                setRealActiveStep={setRealActiveStep}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            )}
            {activeStep + 1 == 3 && realActiveStep == 0 && (
              <Life activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default MultiStepForm;
