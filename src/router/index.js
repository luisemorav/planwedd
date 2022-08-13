import { BrowserRouter, Routes, Route } from "react-router-dom";
// <<<<<<< HEAD
// import MyProfile from "../pages/MyProfile";
// import MyEvent from "../pages/MyEvent";
// import CreateEvent from "../pages/CreateEvent";
// import {LoginView, RegisterView, MyProfile,MyEvent,CreateEvent, MainView, UserProfielView} from '../pages'
// =======
import {
  MainView,
  LoginView,
  RegisterView,
  MyProfile,
  MyEvent,
  Events,
  CreateEvent,
  Search,
  Shoppingcart,
  UserProfielView
} from "../pages";
// >>>>>>> ccde0ab430b34ea1db7fbf867300fc84fb1ba549

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainView />} />
        <Route path="/user/:username" element={<UserProfielView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myevent" element={<MyEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shoppingcart" element={<Shoppingcart />} />
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
