import "./App.css";
import { Landing_57, Register_57, Error_57, ProtectedRoute_57 } from "./pages";
import {
  AddJob_57,
  AllJobs_57,
  Profile_57,
  Stats_57,
  SharedLayout_57,
} from "./pages/dashboard";
import TesFetchUseCors_57 from "./pages/TesFetchUseCors_57";
import TesFetchUseProxy_57 from "./pages/TesFetchUseProxy_57";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App_57() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute_57>
              <SharedLayout_57 />
            </ProtectedRoute_57>
          }
        >
          <Route index element={<Stats_57 />} />
          <Route path="profile" element={<Profile_57 />} />
          <Route path="add-job" element={<AddJob_57 />} />
          <Route path="all-jobs" element={<AllJobs_57 />} />
        </Route>
        <Route path="/landing" element={<Landing_57 />} />
        <Route path="/register" element={<Register_57 />} />
        <Route path="/testcors" element={<TesFetchUseCors_57 />} />
        <Route path="/testproxy" element={<TesFetchUseProxy_57 />} />
        <Route path="*" element={<Error_57 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_57;
