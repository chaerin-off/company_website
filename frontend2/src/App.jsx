import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return(
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
