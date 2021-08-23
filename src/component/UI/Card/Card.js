import React from "react";

const Card = (props) => {
	return (
		<div className="card custom-card border mb-lg-0" onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export default Card;
