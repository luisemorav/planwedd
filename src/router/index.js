import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    MainView, 
    RegisterView, 
    LoginView, 
    EventView, 
    GiftListView,
    CreateEventView, 
    CreateGiftListView
} from '../pages/'

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/event/:id" element={<EventView />} />
                <Route path="/event/:userId/gifts/:id" element={<GiftListView />} />
                <Route path="/createEvent" element={<CreateEventView />} />
                <Route path="/createGift" element={<CreateGiftListView />} />
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
    )
}
export default Router
