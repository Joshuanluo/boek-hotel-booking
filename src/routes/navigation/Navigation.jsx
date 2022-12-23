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
					<div>Logo</div>
				</Link>

				{currentUser ? (
					<div className="nav-links-container">
						<Link className="nav-link" to={`/orders/${currentUser.uid}`}>
							Orders
						</Link>
						<span onClick={signOutUser}>
							{`  ${currentUser.displayName}, `}sign out{" "}
						</span>
					</div>
				) : (
					<div className="nav-links-container">
						<Link className="nav-link" to="/signup">
							Join us
						</Link>
						<Link className="nav-link" to="/login">
							sign in
						</Link>
					</div>
				)}
			</div>
			<Outlet />
		</div>
	);
};

export default Navigation;
