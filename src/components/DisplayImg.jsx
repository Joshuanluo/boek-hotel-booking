import React, { useState } from "react";
import Slider from "react-slick";
// import chicken from "../assets/chicken.png";
// import cow from "../assets/cow.png";
// import dog from "../assets/dog.png";

const DisplayImg = () => {
	// const images = [chicken, cow, dog];
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<h2> Single Item</h2>
	
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>

		</div>
	);
};

export default DisplayImg;
