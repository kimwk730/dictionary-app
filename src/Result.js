import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
	if (props.apiResult) {
		return (
			<div className="result">
				<h2>{props.apiResult.word}</h2>
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
