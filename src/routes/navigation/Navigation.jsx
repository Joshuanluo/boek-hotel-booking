import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
	return (
		<div>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div>Logo</div>
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="/signup">
						Join us
					</Link>
					|
					<Link className="nav-link" to="/login">
						sign in
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Navigation;
