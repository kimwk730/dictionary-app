import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
	if (props.apiResult) {
		return (
			<div className="result">
				<div className="word">
					<h2>
						<strong>{props.apiResult.word}</strong>
						<span>
							<small>{props.apiResult.phonetic}</small>
						</span>
					</h2>
				</div>
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
