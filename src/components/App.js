import Calendar from "./calendar/Calendar";
import MonthCalendar from "./calendar/MonthCalendar";
import "../App.css";
import Home from "../routes/home/Home";
import {Routes, Route } from "react-router-dom";
import Navigation from "../routes/navigation/Navigation"
import SignIn from "../routes/signIn/SignIn";
import Hotels from "../routes/hotels/Hotels";
import Reservation from "../routes/reservation/Reservation";
import Rooms from "../routes/rooms/Rooms";
import Order from "../routes/order/Order";
import Orders from "../routes/orders/Orders";
import SignUp from "../routes/signup/SignUp";

function App() {
	return (
		<div className="App">
			<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<Home />}></Route>
						<Route path="mc" element={<MonthCalendar />}></Route>
						<Route path="login" element={<SignIn />}></Route>
						<Route path="signup" element={<SignUp />}></Route>
						<Route path="hotels/:location" element={<Hotels />}></Route>
						<Route path="hotels/:hotel/reservation" element={<Reservation />}></Route>
						<Route path="hotels/:hotel/reservation/:date" element={<Rooms />}></Route>
						<Route path="hotels/:hotel/reservation/:date/:room" element={<Order />}></Route>
						<Route path="Orders/:uid" element={<Orders />}></Route>
						
					</Route>
			</Routes>
		</div>
	);
}

export default App;
