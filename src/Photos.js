import React from "react";

export default function Photos(props) {
	if (props.photos.length) {
		return (
			<section>
				<div className="row">
					{props.photos.map(function (photo, index) {
						return (
							<div className="col-4" key={index}>
								<a href={photo.src.original} target="_blank" rel="noreferrer">
									<img
										src={photo.src.landscape}
										className="img-fluid"
										alt={photo.src.alt}
										title={photo.src.alt}
									/>
								</a>{" "}
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
