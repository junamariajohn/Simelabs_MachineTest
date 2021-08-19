import React from "react";

const CardBody = (props) => {
	return <div className={`${props.className} card-body`}>{props.children}</div>;
};

export default CardBody;
