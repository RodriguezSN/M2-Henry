import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";

import { NavLink, useLocation } from "react-router-dom";
export default function NavBar() {
	const { pathname } = useLocation;
	const currentLink = `http://localhost:3000/`;

	const isActive = pathname === currentLink;
	return (
		<div className={styleNav.container}>
			<ul className={styleNav.menu}>
				<li>
					<NavLink to="/">
						<img src={logoHenry} alt="logo-henry" />
					</NavLink>
				</li>
				<li>
					<h1>Central de Cruceros</h1>
				</li>
				<div className={styleNav.options}>
					<li>
						<NavLink
							to="/shipping"
							className={({ isActive }) => (isActive ? "active" : "disable")}
						>
							<span>Navieras</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/discounts"
							className={({ isActive }) => (isActive ? "active" : "disable")}
						>
							<span>Promociones</span>
						</NavLink>
					</li>
				</div>
			</ul>
		</div>
	);
}
// className={isActive ? ".active" : ".disable"}
// className={isActive ? ".activee" : ".disable"}
