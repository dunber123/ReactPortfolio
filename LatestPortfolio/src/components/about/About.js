import React from "react";
import "./about.css";
import ME from "../../assets/newabout.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>3 Years of School Project Experience </small>
						</article>

						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>3 Completed & more to come</small>
						</article>
					</div>

					<p>
						The time I spent at the University of Houston as a Computer Information Systems major helped me prepare for my dive into the world of technology. I have been introduced
						to many concepts such as coding, networking, cybersecurity, project management, and other various fields of IT.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
