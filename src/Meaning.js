import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	if (props.meaning) {
		return (
			<div className="meaning">
				<section>
					<h3>
						{"< "}
						{props.meaning.partOfSpeech}
						{" >"}
						{"  "}
						<span className="def">{props.meaning.definition}</span>
					</h3>
					<br />
					<em>{props.meaning.example}</em>
					<Synonyms synonyms={props.meaning.synonyms} />
				</section>
			</div>
		);
	} else {
		return null;
	}
}
