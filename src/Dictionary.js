import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [apiResult, setApiResult] = useState(null);
	const [photos, setPhotos] = useState([]);

	window.onload = function search(e) {
		let apiKey = "0b46of5c21902dba4ed6583ft2aa7e31";
		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=happy&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	};

	function handleImages(response) {
		setPhotos(response.data.photos);
	}

	function handleResponse(response) {
		setApiResult(response.data);
		let imgApiKey = `0b46of5c21902dba4ed6583ft2aa7e31`;
		let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}}&key=${imgApiKey}`;
		axios
			.get(imgApiUrl, { headers: { Auhorization: `Bearer ${imgApiKey}` } })
			.then(handleImages);
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
			<Photos photos={photos} />
		</div>
	);
}
