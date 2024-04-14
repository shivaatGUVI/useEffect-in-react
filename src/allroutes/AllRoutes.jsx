import { Routes, Route, Navigate } from "react-router-dom";
import Illustration from "../components/Illustration";
import Mounting from "../examples/Mounting";
import UseEffect from "../examples/UseEffect";
import Debouncing from "../examples/Debouncing";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Illustration />} />
      <Route path="/mounting" element={<Mounting />} />
      <Route path="/use-effect" element={<UseEffect />} />
      <Route path="/debouncing" element={<Debouncing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
