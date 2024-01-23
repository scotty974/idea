import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ColorProvider } from "./context/ColorContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <ColorProvider>
      <App />
    </ColorProvider>
  </ChakraProvider>
);
