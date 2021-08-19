import React from "react";

const Card = (props) => {
	return (
		<div className={`${props.className} card shadow`} onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export default Card;
