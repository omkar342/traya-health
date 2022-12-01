import React, { useState } from "react";
import classes from "./MultiStepForm.module.css";
import Box from "@mui/material/Box";
import { Step, StepButton, StepLabel, Stepper } from "@mui/material";
import Intro from "./Intro";
import { Container } from "@chakra-ui/react";

function MultiStepForm() {
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  const [activeStep, setActiveStep] = useState(0);

  // const handleStep = (step) => {
  //   console.log(step);
  //   // setActiveStep(step);
  // };

  const handleStep = (step) => () => {
    console.log(step);
    setActiveStep(step);
  };

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
        <h1>Steps are Completed!</h1>
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
            {activeStep + 1 == 1 && <Intro />}
            {activeStep + 1 == 2 && <h1>Scalp</h1>}
            {activeStep + 1 == 3 && <h1>Test</h1>}
          </Box>
        </Container>
      )}
    </Box>
  );
}

export default MultiStepForm;
