import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Rhahan Sarwar</h1>
				<h5 className="text-light">Recent Graduate from University of Houston</h5>
				<h5 className="text-light">Aspiring FullStack Developer</h5>
				<CTA />
				<HeaderSocial />

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
