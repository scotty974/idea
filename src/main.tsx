import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ColorProvider } from "./context/ColorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ColorProvider>
    <App />
    </ColorProvider>
);
