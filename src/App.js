import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeProvider";

function App() {
  const [name, setName] = useState("alEX");

  useEffect(() => {
    setName("john");
  }, [name]);
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
