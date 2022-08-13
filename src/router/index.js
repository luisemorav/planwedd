import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MyProfile from "../pages/MyProfile";
// import MyEvent from "../pages/MyEvent";
// import CreateEvent from "../pages/CreateEvent";
import {LoginView, RegisterView, MyProfile,MyEvent,CreateEvent, MainView,ProfielView} from '../pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainView />} />
        <Route path="/profile/:username" element={<ProfielView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myevent" element={<MyEvent />} />
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
