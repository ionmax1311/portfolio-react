import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, text, toggleMenu }) => {
	return (
		<li onClick={toggleMenu}>
			<NavLink to={link}>{text}</NavLink>
		</li>
	);
};

export default NavItem;
