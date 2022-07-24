import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const Article = ({ title, experienceLevel }) => {
	return (
		<article className="experience__details">
			<BsPatchCheckFill className="experience__details-icon" />
			<div>
				<h4>{title}</h4>
				<small className="text-light">{experienceLevel}</small>
			</div>
		</article>
	);
};

const Experience = () => {
	const variants = {
		visible: { scale: 1, opacity: 1 },
		hidden: { scale: 0.7, opacity: 0 },
	};
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<AnimatePresence>
				<motion.div
					initial="hidden"
					whileInView="visible"
					transition={{
						staggerChildren: 0.5,
					}}
					className="container experience__container"
				>
					<motion.div className="experience__frontend" variants={variants}>
						<h3>Frontend Development</h3>
						<div className="experience__content">
							<Article title="HTML" experienceLevel="Experienced" />
							<Article title="CSS" experienceLevel="Intermediate" />
							<Article title="JavaScript" experienceLevel="Experienced" />
							<Article title="Bootstrap" experienceLevel="Experienced" />
							<Article title="Vue" experienceLevel="Experienced" />
							<Article title="React" experienceLevel="Intermediate" />
						</div>
					</motion.div>

					{/* END OF FRONTEND */}

					<motion.div className="experience__backend" variants={variants}>
						<h3>Backend Development</h3>
						<div className="experience__content">
							<Article title="Node.JS" experienceLevel="Experienced"></Article>
							<Article title="Express" experienceLevel="Experienced"></Article>
							<Article title="Python" experienceLevel="Intermediate"></Article>
							<Article title="Django" experienceLevel="Basic"></Article>
							<Article title="Flask" experienceLevel="Basic"></Article>
							<Article title="PHP" experienceLevel="Basic"></Article>
						</div>
					</motion.div>

					<motion.div className="experience__database" variants={variants}>
						<h3>Database Experience</h3>
						<div className="experience__content">
							<Article title="MySQL" experienceLevel="Experienced"></Article>
							<Article title="MongoDB" experienceLevel="Intermediate"></Article>
							<Article title="Oracle" experienceLevel="Intermediate"></Article>
							<Article title="MSSQL" experienceLevel="Intermediate"></Article>
						</div>
					</motion.div>
					<motion.div className="experience__others" variants={variants}>
						<h3>Other Experience</h3>
						<div className="experience__content">
							<Article title="Github" experienceLevel="Experienced"></Article>
							<Article title="Git" experienceLevel="Intermediate"></Article>
							<Article title="Postman" experienceLevel="Experienced"></Article>
							<Article title="Visual Studio Code" experienceLevel="Experienced"></Article>
							<Article title="AWS" experienceLevel="Intermediate"></Article>
						</div>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default Experience;
