const TextError = (props) => {
	return (
		<div
			className='error'
			style={{ color: "red", fontSize: "9pt", marginTop: "2px" }}>
			{props.children}
		</div>
	);
};

export default TextError;
