import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/UrbanScents.jpg";
import IMG2 from "../../assets/RestoringJustice.png";
import IMG3 from "../../assets/images.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
	{
		id: 1,
		image: IMG1,
		title: "eCommerce Web Application",
		github: "https://github.com/dunber123/Capstone_4375",
		demo: "https://vimeo.com/732822257",
	},
	{
		id: 2,
		image: IMG2,
		title: "Intake Form database management",
		github: "https://github.com/dunber123/Final_RestoringJustice",
		demo: "",
	},
	{
		id: 3,
		image: IMG3,
		title: "Asset Management Application",
		github: "https://github.com/dunber123/SoftwareSix_UH",
		demo: "",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="_blank">
									Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
