import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import MonthCalendar from "./components/MonthCalendar";
import Navigation from "./routes/navigation/Navigation";
import Login from "./components/Login";
const routes = (
	<Router>
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path="mc" element={<MonthCalendar />}></Route>
				<Route path="login" element={<Login />}></Route>
				
			</Route>
		</Routes>
	</Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	routes
	// <React.StrictMode>
	// 	<App />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
