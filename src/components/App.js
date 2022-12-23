import Calendar from "./Calendar";
import MonthCalendar from "./MonthCalendar";
import "../App.css";
import Home from "../routes/home/Home";
import {Routes, Route } from "react-router-dom";
import Navigation from "../routes/navigation/Navigation"
import SignIn from "../routes/signIn/SignIn";
import Hotels from "../routes/hotels/Hotels";
import Reservation from "../routes/reservation/Reservation";

function App() {
	return (
		<div className="App">
			<Routes>
					<Route path="/" element={<Navigation />}>
						<Route index element={<Home />}></Route>
						<Route path="mc" element={<MonthCalendar />}></Route>
						<Route path="login" element={<SignIn />}></Route>
						<Route path="hotels/:location" element={<Hotels />}></Route>
						<Route path="hotels/:hotel/reservation" element={<Reservation />}></Route>
						
					</Route>
			</Routes>
		</div>
	);
}

export default App;
