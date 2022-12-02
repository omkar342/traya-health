import { Button, Stack } from "@chakra-ui/react";
import React from "react";

function FormNavButtons({ activeStep, setActiveStep }) {
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Button
      disabled={activeStep === 0}
      onClick={handleBack}
      variant="outline"
      colorScheme="blue"
    >
      Back
    </Button>
  );
}

export default FormNavButtons;
