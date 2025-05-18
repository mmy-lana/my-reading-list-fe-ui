import React from "react";
import ReactDOM from "react-dom/client"; // React 18 syntax
import "./index.css"; // Tailwind CSS and custom styles
import App from "./App";

// Create the root element for rendering
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// You can optionally enable web vitals to monitor app performance
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
