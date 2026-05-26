import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordPage from "./pages/PasswordPage";
import UniversePage from "./pages/UniversePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/universe" element={<UniversePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;