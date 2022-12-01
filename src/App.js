import "./App.css";
import NavBar from "./Components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MultiStepForm from "./Forms/MultiStepForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  let theme = createTheme({});

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <MultiStepForm />
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
