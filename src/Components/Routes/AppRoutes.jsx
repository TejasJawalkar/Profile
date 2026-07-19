import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { About } from "../About";
import { Services } from "../Services";
import { Contact } from "../Contact";
import { Experience } from "../Experience";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Experience" element={<Experience />} />
    </Routes>
  );
}
