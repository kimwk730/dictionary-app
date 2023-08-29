import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
	if (props.apiResult) {
		console.log(props.apiResult.phonetics);
		return (
			<div className="result">
				<h2>{props.apiResult.word}</h2>
				{props.apiResult.phonetics.map(function (phonetic, index) {
					return (
						<div key={index}>
							<div className="phonetic">
								<a
									href={props.apiResult.phonetics[0].audio}
									target="_blank"
									rel="noreferrer"
								>
									Listen
								</a>
								{props.apiResult.phonetics[0].text}
							</div>
						</div>
					);
				})}
				{props.apiResult.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return "Try another word";
	}
}
