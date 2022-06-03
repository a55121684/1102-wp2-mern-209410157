import "./App.css";
import { Landing_57, Dashboard, Register_57, Error_57 } from "./pages";
import TesFetchUseCors_57 from "./pages/TesFetchUseCors_57";
import TesFetchUseProxy_57 from "./pages/TesFetchUseProxy_57";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App_57() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Landing_57 />} />
        <Route path="/register" element={<Register_57 />} />{" "}
        <Route path="/testcors" element={<TesFetchUseCors_57 />} />
        <Route path="/testproxy" element={<TesFetchUseProxy_57 />} />
        <Route path="*" element={<Error_57 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_57;
