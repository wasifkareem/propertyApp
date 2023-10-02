import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newyork from "./pages/Newyork";
import Mumbai from "./pages/Mumbai";
import Paris from "./pages/Paris";
import London from "./pages/London";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newyork />} />
        <Route path="page/2" element={<Mumbai />} />
        <Route path="page/3" element={<Paris />} />
        <Route path="page/4" element={<London />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
