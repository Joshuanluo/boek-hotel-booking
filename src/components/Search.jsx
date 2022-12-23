import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import "./components.scss";

const options = ["Option 1", "Option 2"];

const Search = () => {
	const [value, setValue] = useState(options[0]);
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="search_container">
			<div className="error_info">
				<div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
				<div>{`inputValue: '${inputValue}'`}</div>
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
				<Button variant="contained" className="main_btn" onClick={() => console.log(inputValue)}>
					search
				</Button>
			</div>
		</div>
	);
};

export default Search;
