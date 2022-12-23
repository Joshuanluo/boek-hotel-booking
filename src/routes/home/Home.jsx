import React from "react";
import DisplayImg from "../../components/DisplayImg";
import "./home.scss";

import Search from "../../components/search/Search";
import DataInit from "../../utils/firebase/dataInit";

const Home = () => {
	return (
		<div className="home">
			<Search />
			{/* <hr /> */}
			{/* <DisplayImg />
			<hr /> */}
			{/* <DataInit /> */}
		</div>
	);
};

export default Home;
