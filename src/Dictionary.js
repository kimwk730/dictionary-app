import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [apiResult, setApiResult] = useState(null);

	window.onload = function search(e) {
		let apiKey = "0b46of5c21902dba4ed6583ft2aa7e31";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=happy&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	};

	function handleResponse(response) {
		setApiResult(response.data);
	}
	function search(e) {
		e.preventDefault();
		let apiKey = "0b46of5c21902dba4ed6583ft2aa7e31";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
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
