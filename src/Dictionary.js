import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);

	function handleResponse(response) {
		console.log(response.data);
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
			<form onSubmit={search}>
				<input type="search" onChange={handleKeyword} />
			</form>
		</div>
	);
}
