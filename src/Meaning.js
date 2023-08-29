import React from "react";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div>
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<div>
							<strong>Definition:</strong> {definition.definition}
							<br />
							<strong>Example:</strong> {definition.example}
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
