import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div>
				<h3>{props.meaning.partOfSpeech}</h3>
				<p>{props.meaning.definitions[0].definition}</p>
				<em>{props.meaning.definitions[0].example}</em>
				<Synonyms synonyms={props.meaning.synonyms} />
			</div>
		);
	} else {
		return null;
	}
}
