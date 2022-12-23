import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import "./search.scss";
import { useNavigate } from "react-router";

const options = ["Sydney", "Melbourne"];

const Search = () => {
	const [value, setValue] = useState(options[0]);
	const [inputValue, setInputValue] = useState("");
	const [errMessage,setErrMessage]=useState("")
	const navigate = useNavigate();
	const handleSearch = () => {
		if (inputValue) {
			navigate(`/hotels/${inputValue}`);
		}else {
			setErrMessage("Please enter valid location")
		}
	};

	return (
		<div className="search_container">
			<div className="error_message">
				{errMessage}
			</div>
			<br />
			<div className="search_main">
				<Autocomplete
					className="search_input"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => {
						setInputValue(newInputValue);
					}}
					id="controllable-states-demo"
					options={options}
					sx={{ width: 350, height: 50 }}
					renderInput={(params) => <TextField {...params} label="Location" />}
				/>
				<Button variant="contained" className="main_btn" onClick={handleSearch}>
					search
				</Button>
			</div>
		</div>
	);
};

export default Search;
