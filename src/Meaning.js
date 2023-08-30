import React from "react";

export default function Meaning(props) {
	return (
		<div>
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (def, index) {
				return (
					<div key={index}>
						<div>
							<strong>Definition:</strong> {def.definition}
							<br />
							<strong>Example:</strong> {def.example}
							<br />
						</div>
					</div>
				);
			})}
			<div>
				<strong>Synonyms:</strong> {props.meaning.synonyms}{" "}
			</div>
			;
		</div>
	);
}
