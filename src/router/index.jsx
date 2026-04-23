import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import View from "../pages/View";
import Edit from "../pages/Edit";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<Navigate to="/view" replace />} />
      </Routes>
    </BrowserRouter>
  );
}