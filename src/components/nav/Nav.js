import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "./config";
import "./nav.css";
import NavItem from "./NavItem";

const Nav = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const outsideClick = (e) => {
			if (e.target.className === "menu-mob active") {
				setOpen(false);
			}
		};
		document.addEventListener("click", outsideClick);

		return () => document.removeEventListener("click", outsideClick);
	}, []);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<div className='nav'>
			<div className='nav-wrap container'>
				<span className='logo'>
					<NavLink to='/'>Maxim</NavLink>
				</span>
				<div
					className={open ? "nav-burger active" : "nav-burger"}
					onClick={toggleMenu}>
					<div className='icon'>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<nav className='menu'>
					<ul>
						{navigation.map((item) => (
							<NavItem
								link={item.link}
								text={item.text}
								key={item.id}
							/>
						))}
					</ul>
				</nav>
				<div className={open ? "menu-mob active" : "menu-mob"}>
					<nav>
						<ul>
							{navigation.map((item) => (
								<NavItem
									link={item.link}
									text={item.text}
									key={item.id}
									toggleMenu={toggleMenu}
								/>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
