import React from "react";
import DisplayImg from "../../components/DisplayImg";
import "./home.scss";

import Search from "../../components/search/Search";

const Home = () => {
	return (
		<div className="home">
			<Search />
			<hr />
			<DisplayImg />
		</div>
	);
};

export default Home;
