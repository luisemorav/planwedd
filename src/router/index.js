// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   LoginView,
//   RegisterView,
//   MyProfile,
//   MyEvent,
//   MainView,
//   UserProfielView,
//   Events,
//   CreateEvent,
//   Search,
//   Shoppingcart,
// } from "../pages";
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainView />} />
//         <Route path="/user/:username" element={<UserProfielView />} />
//         <Route path="/login" element={<LoginView />} />
//         <Route path="/register" element={<RegisterView />} />
//         <Route path="/myprofile" element={<MyProfile />} />
//         <Route path="/myevent" element={<MyEvent />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/createevent" element={<CreateEvent />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/shoppingcart" element={<Shoppingcart />} />
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>Esta página no existe</p>
//             </main>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainView, RegisterView, LoginView, PerfilView} from '../pages/'

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/perfil" element={<PerfilView />} />
                {/* <Route path="/createEvent" element={<CreateEventView />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Router
