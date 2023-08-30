import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [apiResult, setApiResult] = useState(null);

	window.onload = function search(e) {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/happy`;
		axios.get(apiUrl).then(handleResponse);
	};

	function handleResponse(response) {
		setApiResult(response.data[0]);
	}
	function search(e) {
		e.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeyword(e) {
		e.preventDefault();
		setKeyword(e.target.value);
	}

	return (
		<div className="dictionary">
			<form onSubmit={search} className="p-5">
				<input type="search" onChange={handleKeyword} />
				<input type="submit" value="search" />
			</form>
			<Result apiResult={apiResult} />
		</div>
	);
}
