import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";           // ✅ default import
import NotFound from "./pages/NotFound";   // ✅ default import
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
