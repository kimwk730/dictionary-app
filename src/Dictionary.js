import React, { useState } from "react";

export default function Dictionary() {
	const [keyword, setKeyword] = useState(null);

	function search(e) {
		e.preventDefault();
		alert(`Searching for ${keyword}`);
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
