import React from "react";

export default function Phonetic(props) {
	if (props.phonetic) {
		return (
			<div className="phonetic">
				<h2>{props.phonetic}</h2>
			</div>
		);
	} else {
		return null;
	}
}
