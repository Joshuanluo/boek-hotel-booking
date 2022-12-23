import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import _ from "underscore";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import firestoreCrud from "../../utils/firebase/firebase.crud";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../utils/firebase/firebase.utils";
import "./hotels.scss";

const Hotels = () => {
	const params = useParams();
	const [hotels, setHotels] = useState([]);
	const [allImages, setImages] = useState([]);
	const hotelImgRef = ref(storage, `images/hotels/Sydney`);

	useEffect(() => {
		firestoreCrud.getHotelsByLocation(params.location).then((data) => setHotels(data));
		listAll(hotelImgRef)
			.then((res) => {
				// console.log(res);
				// res.prefixes.forEach((folderRef) => {
				// 	// All the prefixes under listRef.
				// 	// You may call listAll() recursively on them.
				// });
				res.items.forEach((itemRef) => {
					// All the items under listRef.
					// console.log(itemRef);
					getDownloadURL(itemRef).then((url) => {
						// console.log(url);
						setImages((allImages) => [...allImages, url]);
					});
				});
			})
			.catch((error) => {
				// Uh-oh, an error occurred!
				console.log(error);
			});
	}, []);

	const getURLbyPicName = (hotelName) => {
		const imgURL = allImages.filter((img) => img.indexOf(hotelName) !== -1)[0];
		return imgURL;
	};
	getURLbyPicName("Keeg");

	return (
		<div className="hotels_container">
			<h1>{params.location}</h1>
			{hotels.map((hotel) => {
				return (
					<div key={hotel.name}>
						{" "}
						{/* <Link className="" to={`/hotels/${hotel.name}/reservation`}>
							<h1>Name:{hotel.name}</h1>
						</Link> */}
						<Card sx={{ maxWidth: 600, margin: 2 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={getURLbyPicName(hotel.name)}
									alt={hotel.name}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{hotel.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{hotel.about}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Link to={`/hotels/${hotel.name}/reservation`}>
									<Button size="small" color="primary">
										BOOK
									</Button>
								</Link>
							</CardActions>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default Hotels;
