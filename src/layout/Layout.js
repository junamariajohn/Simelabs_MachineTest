import React from 'react';
import NavBar from './NavBar/NavBar';

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<div className={'container pb-5'}>{children}</div>
		</>
	);
};

export default Layout;
