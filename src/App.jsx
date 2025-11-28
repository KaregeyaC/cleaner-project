import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";     
import ServiceCard from "./Components/ServiceCard";

const App = () => {
  return (
    <BrowserRouter>
      

      <Routes>
        {/* Layout wrapper */}
        <Route element={<ServiceCard />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


