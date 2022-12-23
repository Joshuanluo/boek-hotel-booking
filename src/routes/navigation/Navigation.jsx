import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	// console.log(currentUser);

	return (
		<div>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div className="logo">BOEK</div>
				</Link>

				{currentUser ? (
					<div className="nav-links-container">
						<Link className="nav-link" to={`/orders/${currentUser.uid}`}>
							Orders
						</Link>
						|
						<Link className="nav-link" onClick={signOutUser}>
							{`  ${currentUser.displayName}, `}sign out{" "}
						</Link>
					</div>
				) : (
					<div className="nav-links-container">
						<Link className="nav-link" to="/signup">
							Join us
						</Link>|
						<Link className="nav-link" to="/login">
							Sign in
						</Link>
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
};

export default Navigation;
