import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginView,
  RegisterView,
  MyProfile,
  MyEvent,
  Events,
  CreateEvent,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myevent" element={<MyEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Esta página no existe</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
