import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import firestoreCrud from "../../utils/firebase/firebase.crud";

const Hotels = () => {
	const params = useParams();
	const [hotels, setHotels] = useState([]);

	useEffect(() => {
		firestoreCrud.getHotelsByLocation(params.location).then((data) => setHotels(data));
	}, []);
	return (
		<div>
			<h1>Hotels</h1>
			{hotels.map((hotel) => {
				return (
					<div key={hotel.name}>
						{" "}
						<Link className="" to={`/hotels/${hotel.name}/reservation`}>
							<h1>Name:{hotel.name}</h1>
						</Link>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image="/static/images/cards/contemplative-reptile.jpg"
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
									{hotel.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" color="primary" to={`/hotels/${hotel.name}/reservation`}>
									BOOK
								</Button>
							</CardActions>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default Hotels;
