import React from "react";
import DisplayImg from "../../components/DisplayImg";
import "./home.scss";

import Search from "../../components/Search";

const Home = () => {
	return (
		<div className="home">
			<div className="home_container">
				<div className="form_container">
					<h1>BOOK A HOTEL AND PLAN THE PERFECT TRIP</h1>
					<div className="form_bg">
						{/* <form className="search_form"> */}
							<Search />
							{/* <Button className="main_btn" >search</Button>
						</form> */}
					</div>
				</div>
			</div>
			<hr />
			<DisplayImg />
		</div>
	);
};

export default Home;
