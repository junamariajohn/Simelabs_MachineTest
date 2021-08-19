import React from "react";

const TextInput = (props) => {
	return (
		<input
			name={props.name}
			className={`${props.className} form-control`}
			onChange={props.onChange}
			onBlur={props.onBlur}
			defaultValue={props.defaultValue}
			value={props.value}
			type={props.type}
		/>
	);
};

export default TextInput;
